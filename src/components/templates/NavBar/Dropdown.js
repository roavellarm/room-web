import React from 'react'
import Menu from '@material-ui/core/Menu'
import { MenuItem, IconButton } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoodIcon from '@material-ui/icons/Mood'

export default ({ dropdownItems, icon }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleMenu = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const getIcon = () => {
    if (icon === 'Mood') return <MoodIcon />
    return <AccountCircle />
  }

  return (
    <>
      <div>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          onClick={handleMenu}
          color="inherit"
        >
          {getIcon()}
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
          {dropdownItems.map(i => (
            <MenuItem
              selected={i.selected}
              onClick={() => {
                handleClose()
                i.onClick()
              }}
            >
              {i.text}
            </MenuItem>
          ))}
          {/* <MenuItem color="inherit" onClick={() => onLogout()}>
            Logout
          </MenuItem> */}
        </Menu>
      </div>
    </>
  )
}
