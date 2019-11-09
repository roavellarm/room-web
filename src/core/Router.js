import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  About,
  Home,
  Contact,
  Unauthorized,
  SignIn,
  SignUp,
  Dashboard,
} from '../containers'

export default ({ isAuthenticated }) => {
  if (isAuthenticated) {
    // Private routes
    return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="/contact" component={props => <Contact {...props} />} />
        <Route path="/about" component={props => <About {...props} />} />
        <Route
          path="/dashboard"
          component={props => <Dashboard {...props} />}
        />
      </Switch>
    )
  }
  // Public routes
  //   Rodrigo Avellar is inviting you to a meeting.

  // Join the meeting:
  // https://meet.jit.si/test

  // To join by phone instead, tap this: +1.512.402.2718,,18315279#

  // Looking for a different dial-in number?
  // See meeting dial-in numbers: https://meet.jit.si/static/dialInInfo.html?room=test

  // If also dialing-in through a room phone, join without connecting to audio: https://meet.jit.si/test#config.startSilent=true

  return (
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
      {/* <Route path="/"        component={   () => } /> */}
      <Route path="/contact" component={props => <Contact {...props} />} />
      <Route path="/about" component={props => <About {...props} />} />
      <Route path="/sign-in" component={props => <SignIn {...props} />} />
      <Route path="/sign-up" component={props => <SignUp {...props} />} />
      <Route path="*" component={props => <Unauthorized {...props} />} />
    </Switch>
  )
}
