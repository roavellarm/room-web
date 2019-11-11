import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Home,
  Contact,
  Unauthorized,
  SignIn,
  SignUp,
  Dashboard,
  Org,
} from '../containers'

export default ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="/contact" component={props => <Contact {...props} />} />
        <Route
          path="/dashboard"
          component={props => <Dashboard {...props} />}
        />
        <Route path="/org" component={props => <Org {...props} />} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
      <Route path="/contact" component={props => <Contact {...props} />} />
      <Route path="/sign-in" component={props => <SignIn {...props} />} />
      <Route path="/sign-up" component={props => <SignUp {...props} />} />
      <Route path="*" component={props => <Unauthorized {...props} />} />
    </Switch>
  )
}
