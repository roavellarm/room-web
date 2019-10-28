import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/room">Room</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/sign-in">Sign-in</Link>
      <Link to="/sign-out">Sign-out</Link>
    </nav>
  )
}
