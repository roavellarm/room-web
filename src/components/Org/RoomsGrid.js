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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  room: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  roomMedia: {
    paddingTop: '50%', // 16:9
  },
  roomContent: {
    flexGrow: 1,
  },
}))

export default ({ rooms }) => {
  const classes = useStyles()

  return (
    <Container className={classes.roomGrid}>
      <Grid container spacing={4}>
        {rooms.map(room => (
          <Grid item key={room.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.room}>
              <CardMedia
                className={classes.roomMedia}
                image={room.image}
                title="Image title"
              />
              <CardContent className={classes.roomContent}>
                <UserIcon status="onCall" />
                <Typography gutterBottom variant="h5" component="h2">
                  {room.name}
                </Typography>
                <Typography>{room.description}</Typography>
              </CardContent>
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
