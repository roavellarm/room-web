import React from 'react'
// react components for routing our app without refresh
// import { Link } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

// @material-ui/icons
// import { Apps, DoubleArrowRounded } from '@material-ui/icons'
import { DoubleArrowRounded } from '@material-ui/icons'

// core components
// import CustomDropdown from '../CustomDropdown/CustomDropdown.js'
import Button from '../CustomButtons/Button.js'

import styles from '../../../assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://github.com/roavellarm/room-doc"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button href="/sign-up" color="transparent" className={classes.navLink}>
          <DoubleArrowRounded className={classes.icons} /> SignUp
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/sign-in" color="transparent" className={classes.navLink}>
          <ExitToAppIcon className={classes.icons} /> SignIn
        </Button>
      </ListItem>
    </List>
  )
}
