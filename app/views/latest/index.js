import React, { Component } from 'react'
import { Icon, Header } from 'semantic-ui-react'

class Genres extends Component {
  render(){
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='asterisk' circular />
          <Header.Content>
            Latest
          </Header.Content>
        </Header>

      </div>
    )
  }
}

export default Genres;
