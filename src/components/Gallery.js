import React from 'react'
import './Gallery.css'
import winter from '../images/bethwinter.jpg'
import friends from '../images/friends.jpg'
import canal from '../images/canal.jpg'
import firstaid from '../images/first_aid.jpg'
import bonnie from '../images/bonnie.jpg'
import rudyard from '../images/rudyard.jpg'
import beth from '../images/beth.jpg'
import canal1 from '../images/canal1.jpg'


export default function Gallery() {
  return (
    <div className='blue' id='gallery'>
      <h1>Gallery</h1>

      <div id='gallery-container'>
        <img className='gallery-img' src={winter} alt='Winter'/>
        <img className='gallery-img' src={friends} alt='Friends'/>
        <img className='gallery-img' src={canal} alt='Canal'/>
        <img className='gallery-img' src={firstaid} alt='First Aid'/>
        <img className='gallery-img' src={bonnie} alt='Bonnie'/>
        <img className='gallery-img' src={rudyard} alt='Rudyard'/>
        <img className='gallery-img' src={beth} alt='Beth'/>
        <img className='gallery-img' src={canal1} alt='Canal Other'/>


      </div>
    </div>
  )
}
