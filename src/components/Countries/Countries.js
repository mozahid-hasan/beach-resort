import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './Countries.css'
const Countries = (props) => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  return (
    <div>
      <h1> Welcome to My Rest Countries Website!!!!</h1>
      <h2>Total Countries : {countries.length}</h2>
      <div className='countries'>
        {countries.map((country, i) => (
          <Country key={i} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Countries
