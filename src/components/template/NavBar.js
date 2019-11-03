import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  makeStyles,
} from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'

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

export default function NavBar({ isAuthenticated }) {
  const classes = useStyles()
  const { setStore } = useStore()

  const onLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setStore({ isAuthenticated: false })
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
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
                <Button color="inherit">Sign in</Button>
              </StyledLink>

              <StyledLink to="/sign-up">
                <Button color="inherit">Sign up</Button>
              </StyledLink>
            </>
          )}

          {isAuthenticated && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem color="inherit" onClick={() => onLogout()} to="/">
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
