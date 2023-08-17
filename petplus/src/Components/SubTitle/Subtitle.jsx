import React from 'react'
import './subtitle.css'

const Subtitle = ({title}) => {
  return (
    <div className='subtitle d-flex' data-aos="zoom-in" data-aos-duration="600">
        <i class="fa-solid fa-paw"></i>
        <p className='aw_hp'>{title}</p>
    </div>
  )
}

export default Subtitle