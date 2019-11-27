import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Home,
  Feedback,
  UserProfile,
  Unauthorized,
  SignIn,
  SignUp,
  Dashboard,
  Org,
  CreateOrg,
  CreateRoom,
  Call,
} from '../containers'

export default ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="/feedback" component={props => <Feedback {...props} />} />
        <Route
          path="/user-profile"
          component={props => <UserProfile {...props} />}
        />
        <Route
          path="/dashboard"
          component={props => <Dashboard {...props} />}
        />
        <Route
          path="/create-org"
          component={props => <CreateOrg {...props} />}
        />
        <Route
          path="/create-room/:org_id"
          children={props => <CreateRoom {...props} />}
        />
        <Route path="/org/:id" children={props => <Org {...props} />} />
        <Route path="/call/:token" children={props => <Call {...props} />} />
        <Route path="*" component={props => <Unauthorized {...props} />} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={props => <Home {...props} />} />
      <Route path="/feedback" component={props => <Feedback {...props} />} />
      <Route path="/sign-in" component={props => <SignIn {...props} />} />
      <Route path="/sign-up" component={props => <SignUp {...props} />} />
      <Route path="*" component={props => <Unauthorized {...props} />} />
    </Switch>
  )
}
