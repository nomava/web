import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router'

export class Navbar extends Component {
  constructor(props) {
    super(props);

    // Set up initial state
    this.state = { activeItem: 'gamepad' }

    // Functions must be bound manually with ES6 classes
    this.handleItemClick = this.handleItemClick.bind(this);
  }


  handleItemClick (e, { name }){
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state
    return (
      <div >
        <Grid>
          <Grid.Column width={4}>
            <Menu fixed="left" inverted vertical style={{width:'18rem'}}>
              <Menu.Item>
                <Menu.Header>Music</Menu.Header>

                <Menu.Menu>
                  <Menu.Item>
                    <Link to="/latest">
                      <Icon name='wait' />
                      Latest
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/trending">
                      <Icon name='hashtag' />
                      Trending
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/playlists">
                      <Icon name='unordered list' />
                      Playlists
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/find">
                      <Icon name='search' />
                      Search
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/genres">
                      <Icon name='group' />
                      Genres
                    </Link>
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>



              <Menu.Item>
                 <Segment>
                   <Image src='https://www.bellanaija.com/wp-content/uploads/2015/08/Album-Front1.jpg' size='medium' centered bordered />
                 </Segment>
                <Menu icon='labeled' inverted>
                  <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
                    <Icon name='backward' />
                  </Menu.Item>

                  <Menu.Item name='video camera' active={activeItem === 'video camera'} onClick={this.handleItemClick}>
                    <Icon name='play' />
                  </Menu.Item>

                  <Menu.Item name='video play' active={activeItem === 'video play'} onClick={this.handleItemClick}>
                    <Icon name='forward' />
                  </Menu.Item>
                </Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Shop</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item>
                      <Link to="/shop/sale">
                        <Icon name='plus cart' />
                        On Sale
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/shop/hot">
                        <Icon name='line graph' />
                        Hottest
                      </Link>
                    </Menu.Item>
                    <Menu.Item >
                      <Link to="/shop/browse">
                        <Icon name='numbered list' />
                        Browse
                      </Link>
                    </Menu.Item>
                  </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Link to="/support/about">
                  <Icon name='question circle' />
                  Support
                </Link>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={11}>
            <Segment>
              {this.props.children}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
