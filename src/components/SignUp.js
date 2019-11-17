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
  const list = [
    {
      sm: 6,
      autoFocus: true,
      autoComplete: 'name',
      name: 'first_name',
      label: 'First Name',
      value: fields.first_name,
      onChange: onChangeField,
    },
    {
      sm: 6,
      autoComplete: 'given-name',
      name: 'last_name',
      label: 'Last Name',
      value: fields.last_name,
      onChange: onChangeField,
    },
    {
      autoComplete: true,
      label: 'Email Address',
      name: 'email',
      type: 'email',
      value: fields.email,
      onChange: onChangeField,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: fields.password,
      onChange: onChangeField,
    },
    {
      name: 'passwordConfirmation',
      label: 'Password Confirmation',
      type: 'password',
      value: fields.passwordConfirmation,
      onChange: onChangeField,
    },
  ]

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
            {list.map(item => (
              <Grid key={item.name} item xs={12} sm={item.sm ? item.sm : 12}>
                <TextField
                  key={item.name}
                  name={item.name}
                  id={item.name}
                  label={item.label}
                  autoFocus={item.autoFocus}
                  value={fields.first_name}
                  type={item.type}
                  autoComplete={item.autoComplete}
                  onChange={item.onChangeField}
                  onKeyDown={onKeyDown}
                  required={true}
                />
              </Grid>
            ))}
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
