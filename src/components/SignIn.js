import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Avatar,
  CssBaseline,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Link,
  Paper,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'
import { Button } from './templates'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'inherit',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    backgroundImage: 'url(/images/dogo-barking.gif)',
    backgroundPosition: 'top',
    backgroundColor: 'white',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn(props) {
  const { onChangeField, onKeyDown, onSubmit, fields, isSubmitting } = props
  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={7} md={7} className={classes.image} />
      <Grid item xs={12} sm={5} md={5} component={Paper} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeField}
              value={fields.email}
              onKeyDown={onKeyDown}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangeField}
              value={fields.password}
              onKeyDown={onKeyDown}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button disabled={isSubmitting} onClick={() => onSubmit()}>
              {isSubmitting ? 'Submitting...' : 'Sign In'}
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
