import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
//  ! Not a component just a simple routing page

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/contact' component={ Contact } />
    <Route path='/about' component={ About } />
  </Switch>
)