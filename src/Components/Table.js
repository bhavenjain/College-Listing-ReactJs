import React from 'react'
import { Link } from 'react-router-dom'
import './css/Table.css'

function Table ({ countries }) {
  return (
    <div className='table'>
      {countries.map((country, key) => (
        <tr key={key}>
          <td key={key}>
            <Link to={`/${country.name}/page`} state={{ country: country }}>
              <strong className='table__collegeName'>{country.name}</strong>
            </Link>
          </td>
          <td>
            <a className='table__goto' href={country.web_pages[0]}>
              Website
            </a>
          </td>
        </tr>
      ))}
    </div>
  )
}

export default Table
