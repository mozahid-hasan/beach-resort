import Banner from '../component/Banner'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRoom from '../component/FeaturedRoom'
import StyledHero from '../component/StyledHero'

const Home = () => {
  //console.log(rooms)
  //console.log(featuredRooms)
  //console.log(featuredRoom)
  //const Room = useContext(RoomContext)
  // // const item = items
  // const [rooms, setRooms] = useState([])
  // const [sortedrooms, setSortedRooms] = useState([])
  // const [featuredRooms, setFeaturedRooms] = useState([])
  // const [looding, setLooding] = useState(true)

  // useEffect(() => {
  //   let Rooms = formatData(items)
  //   // setRooms(Rooms)

  //   let featuredRooms = rooms.filter((room) => room.featured === true)
  //   setFeaturedRooms(featuredRooms)
  // }, [])
  //console.log(rooms)
  // // {
  // //   let featuredRooms = rooms.filter((room) => room.featured === true)
  // //   setFeaturedRooms(featuredRooms)
  // // }

  // const formatData = (items) => {
  //   let tempItem = items.map((item) => {
  //     let id = item.sys.id
  //     let images = item.fields.images.map((image) => image.fields.file.url)
  //     let room = { ...item.fields, images, id }
  //     return room
  //   })
  //   setRooms(tempItem)
  //   return tempItem
  // }

  return (
    <>
      <Hero>
        <Banner title='luxurious rooms' subTitle='deluxe room starting at $299'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>

      <FeaturedRoom></FeaturedRoom>
    </>
  )
}

export default Home
