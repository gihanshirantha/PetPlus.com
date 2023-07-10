import React from 'react'
import './subtitle.css'

const Subtitle = ({title}) => {
  return (
    <div className='d-flex'>
        <i class="fa-solid fa-paw"></i>
        <p className='aw_hp'>{title}</p>
    </div>
  )
}

export default Subtitle