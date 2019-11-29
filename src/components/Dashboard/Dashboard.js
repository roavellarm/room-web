import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Tooltip, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Layout } from '../templates'
import { WithOrgs, WithoutOrg } from '.'

const StyledFloatingButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 70px;
`

export default ({ orgs }) => {
  const content = (
    <>
      {!orgs.length ? <WithoutOrg /> : <WithOrgs orgs={orgs} />}

      <StyledFloatingButton>
        <Link to={`/create-org`} style={{ textDecoration: 'none' }}>
          <Tooltip title="Create your org">
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              // className={classes.margin}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </Link>
      </StyledFloatingButton>
    </>
  )

  return <Layout content={content} />
}
