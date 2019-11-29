import React, { useEffect } from 'react'
import { HeroSection } from '../templates'
import { OrgsGrid } from '.'

export default ({ orgs, getOrgs }) => {
  useEffect(() => {
    let interval
    interval = setInterval(getOrgs(), 10000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <HeroSection
        title={'Dashboard'}
        subtitle={'Here you can view all your organizations'}
      />
      <OrgsGrid orgs={orgs} />
      {/* <InputFile /> */}
    </>
  )
}
