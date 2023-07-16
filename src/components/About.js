import React from 'react'
import '../styles/about.css'

function About({godotImage, unityImage, mernImage}) {
  return (
    <div className='About'>
        <h2 className='About_imageContainer_heading'> Tech That I know</h2>
        <div className='About_imageContainer'>
        <img src={godotImage}  className='About_imageContainer_image'/>
        <img src={unityImage} className='About_imageContainer_image' />
        <img src={mernImage}  className='About_imageContainer_image'/>
        </div>
    </div>
  )
}

export default About