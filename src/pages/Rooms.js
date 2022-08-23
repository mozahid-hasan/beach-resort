import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../component/Context'
import Room from '../component/Room'
import Loading from '../component/Loading'
import RoomContainer from '../component/RoomContainer'
import Title from '../component/Title'
const Rooms = () => {
  const { loading, sortedRooms, rooms } = useGlobalContext()
  // rooms = rooms.map((room) => {
  //   return <Room key={room.id} room={room}></Room>
  // })
  console.log(rooms)
  return (
    <>
      <Hero hero={'roomsHero'}>
        <Banner title={'Our rooms'}>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>

      <RoomContainer></RoomContainer>
    </>
  )
}

export default Rooms
