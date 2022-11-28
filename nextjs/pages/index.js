import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

let arr = []

const Index = (data2) => {
  //const [theme, setTheme] = useState(localStorage.theme);
  const [items, setItems] = useState()
  const [state, setState] = useState([])

  useEffect(() => {
    if (items) {
      arr = JSON.parse(localStorage.getItem('items'))
      arr.push(items)
      localStorage.setItem('items', JSON.stringify(arr))

      if (arr.length > 5) {
        arr.shift()
        localStorage.setItem('items', JSON.stringify(arr))
      }
    }
    setState(JSON.parse(localStorage.getItem('items')))
  }, [items])
  const id = 1
  const router = useRouter()
  const data = ''
  const [value, setValue] = useState('')

  return (
    <div>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          width: '100%',
          boxSizing: 'border-box',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%'
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start'
          }}
        >
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
                flexWrap: 'wrap',
                maxWidth: '1400px',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                alignContent: 'flex-start',
                paddingLeft: '40px',
                paddingRight: '40px',
                paddingTop: '30px',
                paddingBottom: '30px'
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  alignContent: ' flex-start'
                }}
              >
                <div  >
                  <form action={`/user/${value}`} method="post">
                    <div class="form-group">
                      <label for="searchKey">
                        Aratmak İstediğiniz Filmi Giriniz:{' '}
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="searchKey"
                        placeholder="Filmi giriniz"
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={() =>
                        setItems(document.getElementById('searchKey').value)
                      }
                    >
                      Arat
                    </button>
                  </form>
                      <div style={{position: 'fixed'}}>
                  <h2 className="mt-5">Son aratılan 5 anahtar kelime: </h2>
                  <ul class="list-group mt-5">
                    {state.map((data) => (
                      <li class="list-group-item hover"> {data}</li>
                    ))}
                  </ul>
                  </div>
                </div>

                <div className="mx-auto ">
                  <h2 className="mb-4">
                    Yakında vizyona girecek filmler <br />
                    Vizyon tarihleri arası: <br />
                    {data2.data2[0].dates.minimum} ile{' '}
                    {data2.data2[0].dates.maximum} tarihleri
                  </h2>
                  <div
                    style={{
                      paddingLeft: '30px',
                      background: 'transparent',
                      paddingRight: '0',
                      width: '400px',
                      maxWidth: 'calc(1400px - 80px - 268px)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      flex: '0 1 auto'
                    }}
                  >
                    <section
                      style={{
                        width: '100%',
                        display: 'block',
                        padding: '30px 0'
                      }}
                    >
                      <div style={{ marginTop: '-30px' }}>
                        <div
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                          }}
                          className= "ml-5"
                        >
                          {data2.data2[0].results.map((result) => (
                                                          <a href={`/movie/${result.id}`} style={{color: "black", textDecoration: "none"}}>

                            <div
                              className="card mb-3"
                              style={{ width: '18rem' }}
                            >
                              <img
                                class="card-img-top"
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${result.poster_path}`}
                                alt="Card image cap"
                              />

                              <div class="card-body hover">
                                <h5
                                  class="card-title"
                                >
                                  Filmin adı: {result.title}
                                </h5>
                                <p
                                  class="card-text"
                                  style={{
                                    overflow: 'hidden',
                                    height: '100px'
                                  }}
                                >
                                  <b>Özet: </b> {result.overview}
                                </p>
                                {result.overview.length > 188 ? '......' : ''}
                              </div>
                            </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  const https = require('https')
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  })
  // Fetch data from external API
  const url = `https://localhost:7005/api/Movie/getListByUpcomingMovie`
  
  const res = await fetch(url, {
  })
  

  const data2 = await res.json()
  // Pass data to the page via props
  return { props: { data2 } }
}

export default Index
