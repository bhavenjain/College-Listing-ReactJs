import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LaunchIcon from '@material-ui/icons/Launch'

import './css/Page.css'
import { IconButton } from '@material-ui/core'

function Page () {
  const location = useLocation()
  const { country } = location.state
  const [response, setResponse] = useState(null)

  useEffect(() => {
    var url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${country.name}`

    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        const elementID = Object.getOwnPropertyNames(response.query.pages)
        setResponse(response.query.pages[elementID].extract)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className='page'>
      <div className='page__card'>
        <h1 className='page__title'>{country.name}</h1>
        <h3 className='page__country'>Country: {country.country}</h3>
        <a
          href={country.web_pages[0]}
          className='page__link'
          title='Go to Website'
        >
          <LaunchIcon />
        </a>

        <p className='page__extract'>{response}</p>
      </div>
    </div>
  )
}

export default Page
