import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ( {rgb, weight, index} ) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  
  return (
  <>
  <article 
  className={`color`} 
  style={{ backgroundColor: `rbg(${bcg})`}}>
    {' '}
  </article>
  </>

)}

export default SingleColor
