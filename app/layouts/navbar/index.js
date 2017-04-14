import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router'

export class Navbar extends Component {
  render() {
    let visible =true
    return (
      <div style={{height:'100vh'}}>

        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Link to="/">
                <Icon name='home' />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              <Link to="/work">Work</Link>
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              { this.props.children }
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
