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

export default function ButtonAppBar() {
  const classes = useStyles()

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

          <StyledLink to="/sign-up">
            <Button color="inherit">Sign-up</Button>
          </StyledLink>

          <StyledLink to="/room">
            <Button color="inherit">Room</Button>
          </StyledLink>

          <StyledLink to="/contact">
            <Button color="inherit">Contact</Button>
          </StyledLink>

          <StyledLink to="/about">
            <Button color="inherit">About</Button>
          </StyledLink>

          <StyledLink to="/sign-in">
            <Button color="inherit">Sign-in</Button>
          </StyledLink>

          <StyledLink to="/sign-up">
            <Button color="inherit">Sign-up</Button>
          </StyledLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}
