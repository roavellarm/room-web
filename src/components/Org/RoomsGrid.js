import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import { UserIcon } from '../templates'

const useStyles = makeStyles(theme => ({
  roomGrid: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  roomCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  roomMedia: {
    paddingBottom: '50%',
  },
  roomContent: {
    flexGrow: 1,
  },
}))

export default ({ list }) => {
  const classes = useStyles()

  return (
    <Container maxWidth={false} className={classes.roomCard}>
      <Grid container spacing={3}>
        {list.map(room => (
          <Grid item key={room.id} xs={12} sm={6} md={4}>
            <Card className={classes.roomCard}>
              <CardContent className={classes.roomContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {room.title}
                </Typography>
                <Typography>{room.subtitle}</Typography>
              </CardContent>
              <CardMedia
                className={classes.roomMedia}
                image={room.background_image}
                title="Image title"
              >
                <Grid container marginLeft="100px" spacing={2}>
                  <Grid item>
                    <UserIcon status="onCall" />
                  </Grid>
                  <Grid item>
                    <UserIcon status="onCall" />
                  </Grid>
                  <Grid item>
                    <UserIcon status="onCall" />
                  </Grid>
                  <Grid item>
                    <UserIcon status="onCall" />
                  </Grid>
                </Grid>
              </CardMedia>
              <CardActions>
                <Button size="small" color="primary">
                  Enter room
                </Button>
                <Button size="small" color="primary">
                  Meeting
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
