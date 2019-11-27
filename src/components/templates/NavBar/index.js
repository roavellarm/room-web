import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FeedbackIcon from '@material-ui/icons/Feedback'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Tooltip,
  IconButton,
} from '@material-ui/core'
import Dropdown from './Dropdown'
// import IconButton from './IconButton'
import { useStore } from '../../../core/store'
import { updateUserInfo } from '../../../api/user'

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const useStyles = makeStyles({
  root: { flexGrow: 1 },
  title: { flexGrow: 1 },
})

export default withRouter(({ isAuthenticated, history }) => {
  // Add moods here
  const moods = ['Happy', 'Sad', 'Angry']

  const classes = useStyles()
  const { store, setStore } = useStore()

  const onChangeMood = async mood => {
    try {
      const currentMood = String(mood).toLocaleLowerCase()
      await updateUserInfo(currentMood)
      alert(`Mood changed to ${mood}`)
    } catch (error) {
      console.log(error)
    }
  }

  const onLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('database')
    localStorage.removeItem('currentUser')
    setStore({ isAuthenticated: false })
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar fluid="true" position="static">
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
              <IconButton color="inherit" aria-label="menu">
                <Tooltip title="Dashboard">
                  <DashboardIcon />
                </Tooltip>
              </IconButton>
            </StyledLink>
          )}
          <StyledLink to="/feedback">
            <IconButton color="inherit" aria-label="menu">
              <Tooltip title="Feedback">
                <FeedbackIcon />
              </Tooltip>
            </IconButton>
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
              <Tooltip title="Set your mood">
                <div>
                  <Dropdown
                    icon="Mood"
                    dropdownItems={moods.map(m => ({
                      text: m,
                      selected:
                        store &&
                        store.currentUser &&
                        store.currentUser.mood === String(m).toLowerCase(),
                      onClick: () => onChangeMood(m),
                    }))}
                  />
                </div>
              </Tooltip>
              <Dropdown
                dropdownItems={[
                  {
                    text: 'Profile',
                    onClick: () => history.push('/user-profile'),
                  },
                  { text: 'Logout', onClick: () => onLogout() },
                ]}
              />
              {/* <IconButton /> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
})
