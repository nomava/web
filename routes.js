// routes.js
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import App from './app/'
import Home from './app/views/home'
import About  from './app/views/about'
import Contact from './app/views/about/contact'
import Faqs from './app/views/about/faqs'
import Artist from './app/views/artist'
import Song from './app/views/song'
import Find from './app/views/find'
import Latest from './app/views/latest'
import Genres from './app/views/genres'
import Playlists from './app/views/playlists'
import Trending from './app/views/trending'
import Popular from './app/views/artist/popular'
import Join from './app/views/artist/join'
import Shop from './app/views/shop'
import Sale from './app/views/shop/sale'
import Hot from './app/views/shop/hot'
import NoMatch from './app/views/NoMatch'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="support/faqs" component={Faqs}/>
    <Route path="support/contact" component={Contact}/>
    <Route path="support/*" component={About}/>
    <Route path="artists/join" component={Join}/>
    <Route path="artists/popular" component={Popular}/>
    <Route path="artists/*" component={Artist}/>
    <Route path="song" component={Song}/>
    <Route path="find" component={Find}/>
    <Route path="latest" component={Latest}/>
    <Route path="genres" component={Genres}/>
    <Route path="playlists" component={Playlists}/>
    <Route path="trending" component={Trending}/>
    <Route path="shop/sale" component={Sale}/>
    <Route path="shop/hot" component={Hot}/>
    <Route path="shop/*" component={Shop}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
