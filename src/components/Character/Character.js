import React from 'react'
import { Link } from 'react-router-dom';

const Character = ({ image, name, id }) => {
  return (
    <div>
      <img src={image} alt={`${name}`} title={`${name} image`} width="200px" height='200px' />
      <h3><Link to={id}>{name}</Link></h3>
    </div>
  )
}

export default Character;