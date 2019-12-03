import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core'
import { useStore } from '../../core/store'

const useStyles = makeStyles(theme => ({
  orgGrid: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
  const { setStore } = useStore()

  return (
    <Container className={classes.orgGrid} maxWidth="md">
      <Grid container spacing={4}>
        {orgs.map(org => (
          <Grid key={org.id} item xs={12} sm={6} md={4}>
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
                <Link
                  to={`/org/${org.id}`}
                  onClick={() =>
                    setStore({
                      currentOrgName: org.name,
                      currentOrgCreator: org.user,
                    })
                  }
                  style={{ textDecoration: 'none' }}
                >
                  <Button size="small" color="primary">
                    Enter org
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
