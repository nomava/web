// routes.js
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import App from './views/app'
import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'
import Work from './views/work'
import NoMatch from './views/NoMatch'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="work" component={Work}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
