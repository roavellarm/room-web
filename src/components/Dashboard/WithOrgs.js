import React from 'react'
import { HeroSection } from '../templates'
import { OrgsGrid } from '.'

export default ({ orgs }) => {
  return (
    <>
      <HeroSection
        title={'Dashboard'}
        subtitle={'Here you can view all your organizations'}
      />
      <OrgsGrid orgs={orgs} />
    </>
  )
}
