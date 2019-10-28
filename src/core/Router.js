import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  About,
  Home,
  Contact,
  NotAuthorized,
  SignIn,
  SignUp,
  Room,
} from '../containers'

// Router pode conhecer somente o container,
// nem todo conteiner vai ter um component dentro
export default ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route path="/contact" component={props => <Contact {...props} />} />
        <Route path="/about" component={props => <About {...props} />} />
        <Route path="/sign-in" component={props => <SignIn {...props} />} />
        <Route path="/sign-up" component={props => <SignUp {...props} />} />
        <Route path="/room" component={props => <Room {...props} />} />
      </Switch>
    )
  }
  return (
    <Switch>
      <NotAuthorized>não logado</NotAuthorized>
    </Switch>
  )
}
