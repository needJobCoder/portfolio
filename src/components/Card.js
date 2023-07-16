import React from 'react'
import '../styles/card.css'


function Card({ title, imageUrl, description, techImage }) {
    return (
        <div className="card-container">

            <div className="card-container_card-text">
                <img className='card-container_card-text_backgroundImage' src={imageUrl} />
                <div className='card-container_card-text_backgroundImage-titleAndDescriptionContainer'>
                    <h2 className='card-container_card-text_title'>{title}</h2>
                    <p className='card-container_card-text_title_description'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card