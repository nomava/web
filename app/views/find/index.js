import React, { Component } from 'react'
import { Icon, Header } from 'semantic-ui-react'

class Find extends Component {
  render(){
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='search' circular />
          <Header.Content>
            Search
          </Header.Content>
        </Header>
        
      </div>
    )
  }
}

export default Find;
