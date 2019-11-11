import React from 'react'
import { HeroSection } from '../templates'
import { RoomsGrid } from '.'

export default ({ rooms }) => {
  return (
    <>
      <HeroSection />
      <RoomsGrid rooms={rooms} />
    </>
  )
}
