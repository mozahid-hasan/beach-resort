import React from 'react'
import Room from '../component/Room'
const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>Unfortunately no room match by your search parameter!!!</h3>
      </div>
    )
  }

  console.log(rooms.length)
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item) => {
          return <Room key={item.id} room={item}></Room>
        })}
      </div>
    </section>
  )
}

export default RoomList
