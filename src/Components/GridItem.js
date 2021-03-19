import React from 'react'

export const GridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn animate__delay-1s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
