import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core'
import LoggedUserLinks from './LoggedUserLinks'
import IconButton from './IconButton'

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const useStyles = makeStyles({
  root: { flexGrow: 1 },
  title: { flexGrow: 1 },
})

export default function NavBar({ isAuthenticated }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar fluid position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <StyledLink to="/">
              <img
                src="/images/logoText.png"
                alt="logo"
                height="28px"
                align="center"
              />
            </StyledLink>
          </Typography>
          {isAuthenticated && (
            <StyledLink to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </StyledLink>
          )}
          <StyledLink to="/contact">
            <Button color="inherit">Contact</Button>
          </StyledLink>

          {!isAuthenticated && (
            <>
              <StyledLink to="/sign-in">
                <Button color="inherit">Sign in</Button>
              </StyledLink>

              <StyledLink to="/sign-up">
                <Button color="inherit">Sign up</Button>
              </StyledLink>
            </>
          )}
          {isAuthenticated && (
            <>
              <LoggedUserLinks />
              <IconButton />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
