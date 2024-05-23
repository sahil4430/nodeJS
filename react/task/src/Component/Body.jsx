import React from 'react'
import bg2 from '../Assests/2bg.png';
import logo from '../Assests/image 27.png'
import './body.css'
function Body() {
  return (
    <div>
        <img src={bg2} alt='bg image' className='img'/>
        <img src={logo} alt='logo' className='logo'style={{height:'50px' ,width:'300px'}}/>
        <div className='Container'>
          hello 
        </div>
    </div>
  )
}

export default Body
