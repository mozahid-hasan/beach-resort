import logo from './logo.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import { useEffect, useState } from 'react'
import Country from './components/Country/Country'

function App() {
  //const [countries, setCountries] = useState([])
  // const getdata = () => {
  //   fetch('https://restcountries.com/v2/all')
  //     .then((res) => res.json())
  //     .then((data) => setCountries(data))
  // }
  // useEffect(() => {
  //   fetch('https://restcountries.com/v2/all')
  //     .then((res) => res.json())
  //     .then((data) => setCountries(data))
  //   console.log('running')
  // }, [])

  // useEffect( ()
  //         async () => {

  //         const response = await fetch('https://restcountries.com/v2/all')
  //         const data = await response.json()
  //       }
  // },[]
  // const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   const getCountries = async () => {
  //     const response = await fetch('https://restcountries.com/v2/all')
  //     const data = await response.json()
  //     setCountries(data)
  //   }
  //   getCountries()
  // }, [])
  //console.log(countries)
  return (
    <div className='App'>
      <Countries></Countries>
    </div>
  )
}

export default App
