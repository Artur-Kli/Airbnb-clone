import React from 'react'
import './CardImpression.css'

const Card = ({src, title, description, price}) => {
  return (
    <div className="cardImpression">
      <img src={src} alt="" />
      <div className="cardImpression__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Card
