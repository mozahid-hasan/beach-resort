import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../component/Context'
import { Link } from 'react-router-dom'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import StyledHero from '../component/StyledHero'
import defaultImg from '../images/room-4.jpeg'
import Loading from '../component/Loading'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const SingleRoom = () => {
  const [singleRoom, setSingleRoom] = useState({})
  const { getRooms } = useGlobalContext()
  const { slug } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const Room = getRooms(slug)
    setSingleRoom(Room)
  }, [])
  //console.log(singleRoom)

  if (!singleRoom) navigate('/rooms')
  //   return (
  //     <>
  //       {/* //<Loading></Loading> */}

  //       {/* {setSingleRoom(getRooms(slug))} */}
  //     </>

  //     // <div className='error'>
  //     //   <h3>No Room could found..</h3>
  //     //   <Link to='/rooms' className='btn-primary'>
  //     //     Back to rooms
  //     //   </Link>
  //     // </div>
  //   )
  // }

  const {
    images,
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
  } = singleRoom

  if (images) {
    var [mainImg, ...remainingImg] = images
  }

  return (
    <>
      <StyledHero img={images ? mainImg : defaultImg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {images &&
            remainingImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>

          <article className='info'>
            <h3>info</h3>
            <h6>price :${price}</h6>
            <h6>Size :${size} SQFT</h6>
            <h6>
              Max Capacity :
              {capacity > 1 ? `${capacity} pepole` : `${capacity} person`}
            </h6>
            <h6>{`${pets}` ? 'pets allowed' : 'Pets not allowed'}</h6>
            <h6>{`${breakfast}` && 'free breakfast included'}</h6>
          </article>
        </div>

        <section className='room-extras'>
          <h6>Extras</h6>
          <ul className='extras'>
            {extras &&
              extras.map((item, index) => {
                return <li key={index}>-{item}</li>
              })}
          </ul>
        </section>
      </section>
    </>
  )
}

export default SingleRoom
