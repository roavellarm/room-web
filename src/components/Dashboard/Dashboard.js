import React from 'react'
import { Layout, HeroSection } from '../templates'
import { OrgsGrid } from '.'

export default ({ orgs }) => {
  const content = (
    <>
      <HeroSection
        title={'Dashboard'}
        subtitle={'Here you can view all your organizations'}
      />
      <OrgsGrid orgs={orgs} />
    </>
  )
  return <Layout content={content} />
}
