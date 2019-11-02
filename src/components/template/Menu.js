import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useStore } from '../../core/store'

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Menu({ isAuthenticated }) {
  const classes = useStyles()
  const { setStore } = useStore()

  const onLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setStore({ isAuthenticated: false })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <StyledLink to="/">Room</StyledLink>
          </Typography>
          {isAuthenticated && (
            <StyledLink to="/room">
              <Button color="inherit">Room</Button>
            </StyledLink>
          )}
          <StyledLink to="/contact">
            <Button color="inherit">Contact</Button>
          </StyledLink>
          <StyledLink to="/about">
            <Button color="inherit">About</Button>
          </StyledLink>
          {!isAuthenticated && (
            <>
              <StyledLink to="/sign-in">
                <Button color="inherit">Sign-in</Button>
              </StyledLink>

              <StyledLink to="/sign-up">
                <Button color="inherit">Sign-up</Button>
              </StyledLink>
            </>
          )}
          {isAuthenticated && (
            <StyledLink onClick={() => onLogout()} to="/">
              <Button color="inherit">Logout</Button>
            </StyledLink>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
