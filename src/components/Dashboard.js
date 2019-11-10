import React from 'react'

import { Layout, HeroSection, CardGrid } from './templates'

export default function Album() {
  const content = (
    <>
      <HeroSection
        title={'Dashboard'}
        subtitle={'Here you can view all your organizations'}
      />
      <CardGrid />
    </>
  )
  return <Layout content={content} />
}
