import React, { Component } from 'react'
import { Button, Grid, Image, Icon, Header } from 'semantic-ui-react'

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
        <Button.Group labeled>
          <Button icon='play' content='Play' />
          <Button icon='shuffle' content='Shuffle' />
        </Button.Group>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='/assets/img/olothando-1.jpg' />
            </Grid.Column>
            <Grid.Column width={10}>
              <h3> Ndofika nini </h3>
              <p>By Olothando Ndamase</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className='ui two buttons'>
                <Button color='black'>
                  <Icon name='play' />
                  Listen
                </Button>
                <Button color='yellow'>
                  <Icon name='cart' />
                  Buy
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='/assets/img/skit.png' />
            </Grid.Column>
            <Grid.Column width={10}>
                <h3> My bunny boy </h3>
                <p>By Unchartered Watesr</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className='ui two buttons'>
                <Button color='black'>
                  <Icon name='play' />
                  Listen
                </Button>
                <Button color='yellow'>
                  <Icon name='cart' />
                  Buy
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='/assets/img/olwethu-3.jpg' />
            </Grid.Column>
            <Grid.Column width={10}>
                <h3> Noba Yini Dali  </h3>
                <p>By Rhatala</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className='ui two buttons'>
                <Button color='black'>
                  <Icon name='play' />
                  Listen
                </Button>
                <Button color='yellow'>
                  <Icon name='cart' />
                  Buy
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Trending;
