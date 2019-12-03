import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import { UserIcon } from '../templates'

const useStyles = makeStyles(theme => ({
  memberGrid: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  memberCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  memberMedia: {
    flexGrow: 1,
    paddingBottom: '50%',
  },
}))

export default ({ memberList, creator }) => {
  const classes = useStyles()

  return (
    <Container maxWidth={false} className={classes.memberCard}>
      Org creator:{' '}
      <UserIcon
        status="onCall"
        image={creator.image}
        tooltip={creator.first_name + ' ' + creator.last_name}
      />
      <Grid container>
        {memberList.map(member => (
          <Grid key={`${member.id}-${member.first_name}`} item>
            {/* {console.log(member)} */}
            <UserIcon
              status="onCall"
              image={member.image}
              tooltip={member.first_name + ' ' + member.last_name}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}