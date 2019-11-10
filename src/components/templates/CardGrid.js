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

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

const orgs = [
  {
    id: 1,
    name: "Banana's Company",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp4WqNmZOTell-Inq_ctlWBL0dZmHms5tlwKF-zj3gSVOvbcNz',
  },
  {
    id: 2,
    name: 'Apple Organization',
    description:
      'Duis feugiat dolor sed nisl sodales, quis blandit neque mollis',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWYwT9o64AmWxjY1lor733aCR8EVFp0Sfh7BwKaZpmNkW-McSU',
  },
  {
    id: 3,
    name: 'Orange Enterprise',
    description: 'Sed feugiat non risus at malesuada.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdRZ_BeVy_cNXTszg7vXuyEHqgUGALyWfuEvFjr24J-DPOXNUG',
  },
  {
    id: 4,
    name: 'Grape Tech',
    description:
      'Nullam tortor nunc, tempus et ligula a, dignissim pulvinar erat.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1oMu_BHuXGQA2XRaAVZCL29qZeMHglKAIu5WRlO8WS3f1jucP',
  },
  {
    id: 5,
    name: 'Strawberry Fields',
    description: 'Vestibulum maximus mi ac libero laoreet semper.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwOpYtB5lL1zIuH9QizAcqajkTsEiPCnklfR9x7OMbAgqReP-N',
  },
  {
    id: 6,
    name: 'Papaya Org',
    description:
      'Nullam ultricies, magna id mollis cursus, diam ex dapibus odio, sit amet placerat lacus orci nec ante.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkra5m22kB5t1opsGwTtuhr9htzKzdsBfGrm1ueShD6ZcR1pxe',
  },
]

export default () => {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {orgs.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>{card.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Enter org
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
