import React from 'react'

import im1 from '../../assets/im1.jpg'
import im2 from '../../assets/im2.jpg'

import './Sample.css'

const sample = () => {
  return (
    <div className='sample'>
        <h1>Find Best Rated Properties</h1>
      <div>
        <p><span className='bold'> All </span></p>
        <p>Commercial</p>
        <p>Residentia;</p>
        <p>Agricultural</p>
      
      </div>
      <div className='container'>
        <img src={im1} alt='img' />
        <img src={im2} alt='img' />
        <img src={im1} alt='img' />

      </div>
      <button className='btn'>View All</button>
    </div>
  )
}

export default sample
