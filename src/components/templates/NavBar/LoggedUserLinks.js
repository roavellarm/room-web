import React from 'react'
import { withRouter } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import { MenuItem, IconButton } from '@material-ui/core'
import { useStore } from '../../../core/store'

export default withRouter(({ history }) => {
  const { setStore } = useStore()
  const onLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setStore({ isAuthenticated: false })
    history.push('/')
  }
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem color="inherit" onClick={() => onLogout()}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </>
  )
})
