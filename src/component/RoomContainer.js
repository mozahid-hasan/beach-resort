import React from 'react'
import { useGlobalContext } from './Context'
import Loading from './Loading'
import Room from './Room'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'

const RoomContainer = () => {
  // const { loading, sortedRooms, rooms } = useGlobalContext()
  const { rooms, sortedRooms, loading } = useGlobalContext()

  console.log(sortedRooms)
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <RoomFilter rooms={rooms}></RoomFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </>
  )
}

export default RoomContainer
