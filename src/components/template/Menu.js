import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
