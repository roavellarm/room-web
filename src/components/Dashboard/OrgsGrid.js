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
  orgGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  org: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  orgMedia: {
    paddingTop: '56.25%', // 16:9
  },
  orgContent: {
    flexGrow: 1,
  },
}))

export default ({ orgs }) => {
  const classes = useStyles()

  return (
    <Container className={classes.orgGrid} maxWidth="md">
      <Grid container spacing={4}>
        {orgs.map(org => (
          <Grid item key={org} xs={12} sm={6} md={4}>
            <Card className={classes.org}>
              <CardMedia
                className={classes.orgMedia}
                image={org.image}
                title="Image title"
              />
              <CardContent className={classes.orgContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {org.name}
                </Typography>
                <Typography>{org.description}</Typography>
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
