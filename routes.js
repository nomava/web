// routes.js
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import App from './app'
import { Home, About, Contact, NoMatch } from './app/views'



export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
