import React, { Component } from 'react'
import { Icon, Header } from 'semantic-ui-react'

class Playlists extends Component {
  render(){
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='list' circular />
          <Header.Content>
            Playlists
          </Header.Content>
        </Header>

      </div>
    )
  }
}

export default Playlists;
