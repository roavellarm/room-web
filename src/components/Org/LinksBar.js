import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import ShareIcon from '@material-ui/icons/Share'
import { Box, Grid, Tooltip, Avatar, makeStyles, Fab } from '@material-ui/core'
import { Paragraph } from '../templates'

const StyledFloatingButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50px;

  & > div {
    margin-top: 3px;
  }
`

const useStyles = makeStyles(theme => ({
  // container: {
  //   position: 'absolute',
  //   bottom: '62px',
  // },
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
          <Paragraph variant="h7" align="right" color="textSecondary">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                Create Room{' '}
              </Box>
              <Tooltip title="Create new room">
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  className={classes.margin}
                >
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Grid>
          </Paragraph>
        </Link>

        <Link to={`/add-member/${org_id}`} className={classes.links}>
          <Paragraph variant="h7" align="right" color="textSecondary">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                Add member{' '}
              </Box>{' '}
              <Tooltip title="Add a member to participate">
                <Avatar color="primary" className={classes.avatar}>
                  <ShareIcon />
                </Avatar>
              </Tooltip>
            </Grid>
          </Paragraph>
        </Link>
      </div>
    </StyledFloatingButton>
  )
}
