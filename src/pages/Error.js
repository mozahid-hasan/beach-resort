import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <Hero>
      <Banner title='404' subTitle={'page not found'}>
        <Link to='/' className='btn-primary'>
          Back to home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Error
