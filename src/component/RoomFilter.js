import React from 'react'
import { useGlobalContext } from './Context'
import Title from './Title'

//get all unique item
let getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]
}

const RoomFilter = () => {
  const { rooms, sortedRooms, loading, state, handleChange } =
    useGlobalContext()
  const {
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
  console.log(maxPrice)
  console.log(price)
  let types = getUnique(rooms, 'type')
  types = ['all', ...types]
  console.log(types)
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })

  let pepoles = getUnique(rooms, 'capacity')
  pepoles = [...pepoles]
  pepoles = pepoles.map((pepole, index) => {
    return (
      <option key={index} value={pepole}>
        {pepole}
      </option>
    )
  })

  return (
    <section className='filter-container'>
      <Title title={'search rooms'}></Title>
      <form className='filter-form'>
        {/* search by capacity */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* search by capacity */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guest </label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {pepoles}
          </select>
        </div>
        {/*  search by price  */}
        <div className='from-group'>
          <label htmlFor='price'>room price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>

        {/*  search by size  */}
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default RoomFilter
