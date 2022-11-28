import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SingleUser = ({ data }) => {
  console.log(data)

  return (
    <div className="container">
      {data[0].results.map((data) => (
        <div className="card mx-auto m-3 w-75" style={{ width: '18rem' }}>
          <Link href={`/movie/${data.id}`}>
            <a style={{ color: 'black ' }}>
              <div class="row">
                <img
                  className="card-img-top col "
                  style={{ maxWidth: '150px', height: 'auto' }}
                  src={
                    'https://image.tmdb.org/t/p/original/' + data.poster_path
                  }
                  alt="Card image cap"
                />
                <div className="col">
                  <h5 className="card-title mt-5"> {data.title}</h5>
                  <small>{data.release_date}</small>
                  <p
                    className="card-text"
                    style={{ height: '48px', overflow: 'hidden' }}
                  >
                    {data.overview}
                  </p>
                  {data.overview.length > 188 ? '......' : ''}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  const https = require('https')
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  })
  // Fetch data from external API
  const url = `https://localhost:7005/api/Movie/getListMovieBySearchKey?searchKey=${context.params.slug}`
  const ur2 =
    'https://image.tmdb.org/t/p/original/xyiy5wZdmnxVViRa8oRMXQQvT6F.jpg'
  const res = await fetch(url, {
    agent: httpsAgent
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default SingleUser
