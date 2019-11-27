import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Tooltip, Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Layout } from '../templates'
import { WithOrgs, WithoutOrg } from '.'

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

export default ({ orgs }) => {
  const classes = useStyles()

  const content = (
    <>
      {!orgs.length ? <WithoutOrg /> : <WithOrgs orgs={orgs} />}
      <Grid
        container
        // direction="row"
        justify="flex-end"
        alignItems="flex-end"
        className={classes.container}
        spacing={2}
      >
        <Grid item>
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
        </Grid>
      </Grid>
    </>
  )
  return <Layout content={content} />
}
