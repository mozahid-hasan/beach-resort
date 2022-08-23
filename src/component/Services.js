import React from 'react'
import Title from './Title'
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa'
const Services = () => {
  const services = [
    {
      icon: <FaCocktail></FaCocktail>,
      title: 'free cocktail',
      info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet',
    },
    {
      icon: <FaBeer></FaBeer>,
      title: 'Strongest Beer',
      info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet',
    },
    {
      icon: <FaShuttleVan></FaShuttleVan>,
      title: 'free shuttle',
      info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet',
    },
    {
      icon: <FaHiking></FaHiking>,
      title: 'Endless Hiking',
      info: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet',
    },
  ]
  return (
    <section className='services'>
      <Title title='services'></Title>
      <div className='services-center'>
        {services.map((item, index) => {
          return (
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
