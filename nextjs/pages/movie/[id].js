import React from 'react'
import { useRouter } from 'next/router'
import { Waypoint } from 'react-waypoint'

const SingleMovie = (data) => {
  const [_document, set_document] = React.useState(null)

  React.useEffect(() => {
    set_document(document)
  }, [])
  let runtime = parseInt(data.data.runtime)
  let hours = runtime / 60
  hours = Math.floor(hours)
  let minute = runtime % 60
  console.log(data)

  return (
    <div>
      <section
        className="container-fluid"
        style={{ backgroundColor: 'green', height: '560px' }}
      >
        <div className=" ml-2" style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <div
            style={{
              borderWidth: '0px',
              minWidth: '300px',
              width: '300px',
              height: '450px'
            }}
          >
            <div
              className="poster"
              style={{
                display: 'block',
                minWidth: '300px',
                width: '300px',
                height: '450px',
                position: 'relative',
                top: '0',
                left: '0'
              }}
            >
              <img
                className=" mt-5"
                style={{
                  display: 'inline-block',
                  minWidth: '300px',
                  borderRadius: '18px',
                  overflow: 'hidden'
                }}
                src={
                  'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                  data.data.backdrop_path
                }
                alt="image cap"
              />
            </div>
            <div
              className="ott_offer"
              style={{
                position: 'relative',
                top: '0',
                left: '0',
                width: '100%',
                backgroundColor: 'darkblue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomRightRadius: '8px',
                borderBottomLeftRadius: '8px',
                boxSizing: 'borderBox'
              }}
            >
              <div className="mb-0">
                <span style={{ color: 'white' }}>
                  Now Streming
                  <h4>
                    <a
                      class
                      href={data.data.homepage}
                      style={{ color: 'white' }}
                    >
                      Hemen izle
                    </a>
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <section
            className="col-9"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              alignContent: 'center',
              boxSizing: 'border-box',
              paddingLeft: '40px'
            }}
          >
            <div
              className=""
              style={{
                width: '100%',
                marginBottom: '24px'
              }}
            >
              <h2 className="mt-5 mb-3"> {data.data.title}</h2>

              <div>
                <span className="pr-5">
                  Filmin Çıkış Tarihi: {data.data.release_date}
                </span>
                *
                {
                  <span className="pl-1 pr-3">
                    {data.data.genres.map((data) => (
                      <span>{data.name} </span>
                    ))}
                  </span>
                }
                *
                <span>
                  Film Süresi: {hours}saat {minute}dakika
                </span>
                <span
                  className="text"
                  style={{ height: '48px', overflow: 'hidden' }}
                ></span>
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <h4>Film Sloganı:</h4>
              <h3 style={{ color: 'black' }}> {data.data.tagline}</h3>
              <h3>Özet</h3>
              <p>{data.data.overview}</p>
            </div>
          </section>
        </div>
      </section>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start'
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            width: '100%',
            display: 'flex',
            paddingLeft: '40px',
            paddingRight: '40px',

            paddingTop: '30px',
            paddingBottom: '30px',
            alignItems: 'flex-start',
            alignContent: 'flex-start'
          }}
        >
          <div>
            <div
              style={{
                width: '1000px',
                maWidth: '1400px - 80px - 268px',
                display: 'flex',
                flexWrap: 'wrap',
                flex: '0 1 auto',
                paddingRight: '30px'
              }}
            >
              <div className="">
                <section
                  style={{
                    width: '100%',
                    display: 'block',
                    padding: '30px',
                    borderTop: '1px solid #d7d7d7'
                  }}
                >
                  <div id="recommendation_waypoint">
                    <h3> Benzer Filmler</h3>
                    <div style={{ position: 'relative', top: '0', left: '0' }}>
                      <div
                        style={{
                          overflowY: 'hidden',
                          overflowX: 'scroll',
                          whiteSpace: 'nowrap',
                          paddingBottom: '10px',
                          width: '18%'
                        }}
                      >
                        {data.data2[0].results.map((data3) => (
                          <div
                            style={{
                              display: 'inline-block',
                              float: 'none',
                              borderRadius: '7px',
                              width: '250px',
                              marginRight: '15px',
                              overflow: 'hidden'
                            }}
                          >
                            <div style={{ width: '250px', height: '141px' }}>
                              <a href={`/movie/${data3.id}`}>
                                <img
                                  loading="lazy"
                                  style={{
                                    top: '0',
                                    left: '0',
                                    width: '250px',
                                    height: '141px'
                                  }}
                                  src={`https://www.themoviedb.org/t/p/w250_and_h141_face${data3.backdrop_path}`}
                                />
                              </a>
                            </div>
                            <p>
                              <a
                                href={`https://www.themoviedb.org/t/p/w250_and_h141_face${data3.backdrop_path}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                  overflow: 'hidden'
                                }}
                              >
                                <bdi>{data3.title}</bdi>
                              </a>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div
            style={{
              minWidth: '260px',
              width: '260px',
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <section
                style={{
                  paddingTop: '4px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  width: '100%',
                  maxWidth: '300px'
                }}
              >
                <div>
                  <div style={{ paddingBottom: '0', marginBottom: '0' }}>
                    <section>
                      <p>
                        <strong style={{ display: 'block' }}>
                          Orijinal Başlık
                        </strong>
                        {data.data.original_title}
                      </p>
                      <p>
                        <strong style={{ display: 'block' }}>Durumu</strong>
                        {data.data.status}{' '}
                      </p>
                      <p>
                        <strong style={{ display: 'block' }}>
                          Orijinal Dili
                        </strong>
                        {data.data.original_language}{' '}
                      </p>
                      <p>
                        <strong style={{ display: 'block' }}>
                          Harcanan Bütçe
                        </strong>
                        {data.data.budget}
                        {'$'}
                      </p>
                      <p>
                        <strong style={{ display: 'block' }}>
                          Elde Edilen Gelir
                        </strong>
                        {data.data.revenue}
                        {'$'}
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
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
  const url = `https://localhost:7005/api/Movie/getMovieById?movieId=${context.params.id}`
  const url2 = `https://localhost:7005/api/Movie/getListBySimilirMovie?movieId=${context.params.id}`

  const res = await fetch(url, {
    agent: httpsAgent
  })

  const data = await res.json()

  const res2 = await fetch(url2, {
    agent: httpsAgent
  })
  const data2 = await res2.json()
  console.log(data)
  console.log(data2)
  // Pass data to the page via props
  return { props: { data, data2 } }
}

function assad(recommendation_waypoint, movieTitle, movie) {
  var recommendation_waypoint_check = false
  new Waypoint({
    element: recommendation_waypoint,
    handler: function (direction) {
      if (direction == 'down' && !recommendation_waypoint_check) {
        $.ajax({
          url: kendo.format(
            '/{0}/{1}/remote/recommendations',
            'movie',
            '1865-pirates-of-the-caribbean-on-stranger-tides'
          ),
          type: 'GET',
          data: {
            version: 1,
            translate: false
          }
        }).done(function (response) {
          recommendation_waypoint_check = true
          $('#recommendation_waypoint').html(response).hide().fadeIn(1000)
          initializeScroller(false, '#recommendation_scroller')
          observer.observe()
        })
      }
    },
    offset: '100%'
  })
}

export default SingleMovie
