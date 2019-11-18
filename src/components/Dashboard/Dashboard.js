import React from 'react'
import { Layout } from '../templates'
import { WithOrgs, WithoutOrg } from '.'

export default ({ orgs }) => {
  const content = (
    <>{!!orgs.lenght ? <WithoutOrg /> : <WithOrgs orgs={orgs} />}</>
  )
  return <Layout content={content} />
}
