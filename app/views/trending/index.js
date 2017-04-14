import React, { Component } from 'react'
import { Icon, Header } from 'semantic-ui-react'

class Trending extends Component {
  render(){
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='hashtag' circular />
          <Header.Content>
            Trending
          </Header.Content>
        </Header>

      </div>
    )
  }
}

export default Trending;
