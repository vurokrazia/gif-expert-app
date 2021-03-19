import React, { useState, useEffect } from 'react'
import { getGifs } from '../heplpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';
export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getGifs(category).then(setImages)
  // }, [category])


  return (
    <>
      <h3 >{category}</h3>
      <h5>{loading && <p className="animate__animated animate__flash">Loading</p> }</h5>
      <div className="card-grid">
        {
          images.map((img) => {
            return <GridItem key={img.id} {...img} />
          })
        }
      </div>
    </>
  )
}
