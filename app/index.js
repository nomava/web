import React, { Component } from 'react'
import { Link } from 'react-router'
import { Navbar } from './layouts/navbar'
class App extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (

      <div>        
        <Navbar>
        { this.props.children }
        </Navbar>
      </div>
    )
  }
}

export default App;
