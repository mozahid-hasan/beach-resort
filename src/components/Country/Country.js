import React from 'react'
import './Country.css'
const Country = (item) => {
  const { name, area, flags } = item.country
  return (
    <div className='country'>
      <h2> {name}</h2>
      <h4>Area : {area}</h4>
      <a
        href={`https://en.wikipedia.org/wiki/${name}`}
        target='_blank'
        rel='noopener noreferrer'
        title='visit country detail'
      >
        <img className='image' src={flags.png} alt='' />
      </a>
    </div>
  )
}

export default Country
