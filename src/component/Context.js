import React, { createContext, useEffect, useState, useContext } from 'react'
import data from '../data'
import items from '../data'

const RoomContext = createContext()
console.log(items)
const RoomProvider = ({ children }) => {
  var [rooms, setRooms] = useState([])
  const [featuredRooms, setFeaturedRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortedRooms, setSortedRooms] = useState([])

  const [state, setState] = useState({
    type: 'all',
    capacity: 0,
    size: 0,
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    maxSize: 0,
    minSize: 0,
    breakfast: false,
    pets: false,
  })
  // formating data from data.js file
  const getAllRooms = (items) => {
    let tempItem = items.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url)
      let room = { ...item.fields, images, id }

      return room
    })

    return tempItem
  }

  useEffect(() => {
    if (rooms.length > 0) {
      var maxPrice = Math.max(...rooms.map((item) => item.price))
      var maxSize = Math.max(...rooms.map((item) => item.size))
      setState({
        ...state,
        maxSize: maxSize,
        price: maxPrice,
        maxPrice: maxPrice,
      })
    }
  }, [rooms])

  // get all featuredRooms
  const getFeaturedRoom = (AllRooms) => {
    let featuredRooms = AllRooms.filter((room) => room.featured === true)
    return featuredRooms
  }

  const getRooms = (slug) => {
    let tempRooms = rooms
    const room = tempRooms.find((room) => room.slug === slug)
    return room
  }

  const handleChange = (event) => {
    const target = event.target
    let value = target.type === 'checkbox' ? target.checked : target.value
    let name = event.target.name

    setState({ ...state, [name]: value }, filterRooms())
  }

  const filterRooms = () => {
    let {
      type,
      capacity,
      size,
      price,
      maxPrice,
      minPrice,
      maxSize,
      minSize,
      breakfast,
      pets,
    } = state
    let tempRooms = [...rooms]
    capacity = parseInt(capacity)
    price = parseInt(price)

    // filter by room type
    if (type !== 'all') {
      console.log(type)
      tempRooms = tempRooms.filter((room) => room.type === type)
    }
    // filter by room capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity)
    }
    // filter by room price
    tempRooms = tempRooms.filter((room) => room.price <= price)
    // filter by room size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    )
    // filter by room breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true)
    }
    // filter by room pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true)
    }

    setSortedRooms(tempRooms)
  }

  useEffect(() => {
    let AllRooms = getAllRooms(items)
    console.log(AllRooms)
    setRooms(AllRooms)
    const featuredRoom = getFeaturedRoom(AllRooms)
    setFeaturedRooms(featuredRoom)
    setLoading(false)
    setSortedRooms(AllRooms)
  }, [])

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        loading,
        sortedRooms,
        getRooms,
        state,
        handleChange,
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(RoomContext)
}

export { RoomContext, RoomProvider }
