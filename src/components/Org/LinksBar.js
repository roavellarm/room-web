import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import ShareIcon from '@material-ui/icons/Share'
import { Grid, Tooltip, Avatar, makeStyles, Fab } from '@material-ui/core'

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
    <Grid
      container
      // direction="row"
      justify="flex-end"
      alignItems="flex-end"
      className={classes.container}
      spacing={2}
    >
      <Grid item>
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
      </Grid>
      <Grid item>
        <Link to={'/invite-members'} className={classes.links}>
          <Tooltip title="Invite members to participate">
            <Avatar color="primary" className={classes.avatar}>
              <ShareIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </Grid>
    </Grid>
  )
}
