import React, { useState } from 'react';
import AddCategory from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'
const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />

      {
        categories.map((category) => {
          return <GifGrid key={category} category={category} />
        })
      }

    </>
  )
}

export default GifExpertApp;
