import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'
import Form from './Form'
import Table from './Table'
import { sortData, sortCountry } from '../util'
import './css/Landing.css'

function Landing () {
  const [api, setApi] = useState(null)
  const [apiCountry, setApiCountry] = useState(null)
  const [countryList, setCountryList] = useState(['India'])
  const [checkCountry, setCheckCountry] = useState('India')
  const countries = new Set()

  useEffect(() => {
    // Fetch the data
    const getData = async () => {
      axios
        .get(`http://universities.hipolabs.com/search?country=${checkCountry}`)
        .then(response => {
          const data = sortData(response.data)
          // console.log(data)
          setApi(data)
        })
        .catch(error => alert('Not Received'))
    }
    getData()
  }, [checkCountry])

  useEffect(() => {
    // Fetch the data
    const getData = async () => {
      axios
        .get('http://universities.hipolabs.com/search?')
        .then(response => {
          const data = sortCountry(response.data)
          setApiCountry(data)
          // console.log(data)
        })
        .catch(error => alert('Not Received'))
    }
    getData()
  }, [])

  useEffect(() => {
    if (apiCountry) {
      apiCountry.forEach(country => {
        countries.add(country.country)
      })
    }
    let temp = []
    countries.forEach(country => temp.push(country))
    setCountryList(temp)
  }, [apiCountry])

  const onCheckChange = e => {
    setCheckCountry(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div className='landing'>
      {api ? (
        <div className='landing__sections'>
          <div className='landing__header'>
            <h1 className='landing__title'>College Tracker</h1>
            <Form
              checkCountry={checkCountry}
              onCheckChange={onCheckChange}
              countryList={countryList}
            />
          </div>

          <Table countries={api} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Landing
