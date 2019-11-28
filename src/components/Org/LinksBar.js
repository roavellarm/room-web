import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import ShareIcon from '@material-ui/icons/Share'
import { Tooltip, Avatar, makeStyles, Fab } from '@material-ui/core'

const StyledFloatingButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 70px;

  & > div {
    margin-top: 3px;
  }
`

const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    bottom: '62px',
  },
  links: {
    textDecoration: 'none',
  },
  avatar: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
}))

export default ({ org_id }) => {
  const classes = useStyles()

  return (
    <StyledFloatingButton>
      <div>
        <Link to={`/create-room/${org_id}`} className={classes.links}>
          <Tooltip title="Create new room">
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
      </div>
      <div>
        <Link to={`/add-member/${org_id}`} className={classes.links}>
          <Tooltip title="Add a member to participate">
            <Avatar color="primary" className={classes.avatar}>
              <ShareIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </div>
    </StyledFloatingButton>
  )
}
