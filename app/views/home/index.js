import React, { Component } from 'react'
import { Card, Button, Image, Segment, Container, Header, Icon, Advertisement } from 'semantic-ui-react'
class Home extends Component {
  render(){
    return (
      <div>
        <Segment className='head-text' textAlign='center' inverted color='yellow'>
          <h1><Icon name='hashtag' /><i>KRISP</i></h1>
        </Segment>
        <Card.Group>
          <Card>
            <Image src='/assets/img/olothando-1.jpg' />
            <Card.Content>
              <Card.Header>Mpumelelo</Card.Header>
              <Card.Meta>Afro Soul</Card.Meta>
              <Card.Description>By Olothando Ndamase</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='black'>
                  <Icon name='play' />
                  Listen
                </Button>
                <Button.Or/>
                <Button color='yellow'>
                  <Icon name='download' />
                  Download
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/assets/img/olothando-2.jpg' />
            <Card.Content>
              <Card.Header>Ndiphendule</Card.Header>
              <Card.Meta>R&B</Card.Meta>
              <Card.Description>By Olothando</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='black'>
                  <Icon name='play' />
                  Listen
                </Button>
                <Button.Or/>
                <Button color='yellow'>
                  <Icon name='cart' />
                  Buy
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Image src='/assets/img/olothando-3.jpg' />
            <Card.Content>
              <Card.Header>Ndofika nini</Card.Header>
              <Card.Meta>R&B</Card.Meta>
              <Card.Description>By Olothando</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button color='black'>
                  <Icon name='play' />
                  Listen
                </Button>
                <Button.Or/>
                <Button color='yellow'>
                  <Icon name='cart' />
                  Buy
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        <Segment textAlign='center'>
          <Header as='h2'>Who is Olothando ?</Header>
          <p> An Afro Soul Artist from the depths of the Eastern Cape... </p>
          </Segment>
      </div>
    )
  }
}

export default Home;
