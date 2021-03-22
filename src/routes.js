import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutMe from './Components/AboutMe'
import Body from './Components/Body'

export default (
 <Switch>
  <Route exact path='/' component={Body}></Route>
  <Route exact path='/about-me' component={AboutMe}></Route>
 </Switch>
)