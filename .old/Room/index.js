import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import RoomIcon from '@material-ui/core/Avatar'
import Avatar from '../../src/components/template/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Skeleton from '@material-ui/lab/Skeleton'
import Button from '../../src/components/template/Button'
import Grid from '@material-ui/core/Grid'
import Meeting from './Meeting'
import Meeting2 from './Meeting2'
import Meeting3 from './Meeting3'
import Paper from './Paper'

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  card: {
    // maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    // height: 190,
  },
  root: {
    flexGrow: 1,
  },
}))

function Media(props) {
  const { loading = false } = props
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <RoomIcon alt="Cafe" src="/images/coffee-avatar.png" />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={loading ? <Skeleton height={6} width="80%" /> : 'Cafe'}
        subheader={
          loading ? (
            <Skeleton height={6} width="40%" />
          ) : (
            'Sala de bate papo e break'
          )
        }
      />
      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://media-cdn.tripadvisor.com/media/photo-s/07/dc/f9/cc/room-cafe.jpg "
          title="Cafe"
        >
          <Grid container spacing={0}>
            <Grid item xs>
              <Avatar name="Fulano1" img="/images/people/perfil1.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano2" img="/images/people/perfil2.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano3" img="/images/people/perfil3.png" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano4" img="/images/people/perfil4.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano5" img="/images/people/perfil5.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano1" img="/images/people/perfil1.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano2" img="/images/people/perfil2.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano3" img="/images/people/perfil3.png" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano4" img="/images/people/perfil4.jpg" />
            </Grid>
            <Grid item xs>
              <Avatar name="Fulano5" img="/images/people/perfil5.jpg" />
            </Grid>
          </Grid>
        </CardMedia>
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={6} />
            <Skeleton height={6} width="80%" />
          </React.Fragment>
        ) : (
          <Button>Enter room</Button>
        )}
      </CardContent>
    </Card>
  )
}

Media.propTypes = {
  loading: PropTypes.bool,
}

export default function Room() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Meeting />
      <Meeting2 />
      <Meeting3 />
      <Paper />
      <Grid container spacing={2}>
        <Grid item xs>
          <Media loading />
        </Grid>
        <Grid item xs>
          <Media />
        </Grid>
        <Grid item xs>
          <Media />
        </Grid>
      </Grid>

      {/* {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))} */}
    </div>
  )
}
