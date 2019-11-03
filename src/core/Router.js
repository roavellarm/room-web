import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  About,
  Home,
  Contact,
  Unauthorized,
  SignIn,
  SignUp,
  Office,
} from '../containers'

export default ({ isAuthenticated }) => {
  if (isAuthenticated) {
    // Private routes
    return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="/contact" component={props => <Contact {...props} />} />
        <Route path="/about" component={props => <About {...props} />} />
        <Route path="/office" component={props => <Office {...props} />} />
      </Switch>
    )
  }
  // Public routes
  return (
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
      <Route path="/contact" component={props => <Contact {...props} />} />
      <Route path="/about" component={props => <About {...props} />} />
      <Route path="/sign-in" component={props => <SignIn {...props} />} />
      <Route path="/sign-up" component={props => <SignUp {...props} />} />
      <Route path="*" component={props => <Unauthorized {...props} />} />
    </Switch>
  )
}
