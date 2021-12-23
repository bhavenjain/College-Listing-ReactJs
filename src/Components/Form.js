import React from 'react'
import {
  MenuItem,
  FormControl,
  option,
  Select,
  InputLabel
} from '@material-ui/core'

function Form ({ checkCountry, onCheckChange, countryList }) {
  return (
    <div className='form'>
      <FormControl className='landing__form'>
        <InputLabel id='demo-simple-select-label'>Country</InputLabel>
        <Select
          native
          value={checkCountry}
          label='Country'
          onChange={onCheckChange}
        >
          <MenuItem value='India'>India</MenuItem>

          {countryList.map((country, key) => (
            <option key={key} id={key} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Form
