import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import Header from '../template/Header/Header'
import Footer from '../template/Footer/Footer'
import GridContainer from '../template/Grid/GridContainer'
import GridItem from '../template/Grid/GridItem'
import Button from '../template/CustomButtons/Button'
import HeaderLinks from '../template/Header/HeaderLinks'
import Parallax from '../template/Parallax/Parallax'

import styles from '../../assets/jss/material-kit-react/views/landingPage'

// Sections for this page
import ProductSection from './Sections/ProductSection'
import TeamSection from './Sections/TeamSection'
import WorkSection from './Sections/WorkSection'

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter image={require('../../assets/img/office.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Room</h1>
              <h4>
                Aproximando pessoas no trabalho remoto
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
