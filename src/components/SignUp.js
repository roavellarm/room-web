import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Avatar,
  CssBaseline,
  Link,
  Grid,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core'
import { Button, TextField } from './templates'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUp({ fields, onChangeField, onSubmit, onKeyDown }) {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                required
                id="firstName"
                label="First Name"
                autoFocus
                onChange={onChangeField}
                value={fields.first_name}
                onKeyDown={onKeyDown}
                rows={1}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                onChange={onChangeField}
                value={fields.last_name}
                onKeyDown={onKeyDown}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChangeField}
                value={fields.email}
                onKeyDown={onKeyDown}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={onChangeField}
                value={fields.password}
                onKeyDown={onKeyDown}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="passwordConfirmation"
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                onChange={onChangeField}
                value={fields.passwordConfirmation}
                onKeyDown={onKeyDown}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={() => onSubmit()}>Sign Up</Button>
            </Grid>
            <Grid item xs={12}>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
}
