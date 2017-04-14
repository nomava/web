import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router'

export class Navbar extends Component {
  render() {
    let visible =true
    return (
      <div >
        <Grid>
          <Grid.Column width={3}>
            <Menu fixed="left" inverted vertical style={{height:'100vh'}}>
              <Menu.Item>
                <Menu.Header>Music</Menu.Header>

                <Menu.Menu>
                  <Menu.Item>
                    <Link to="/latest">
                      <Icon name='asterisk' />
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
                      <Icon name='list' />
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
                      <Icon name='unordered list' />
                      Genres
                    </Link>
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Artists</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item>
                      <Link to="/artists/popular">
                        <Icon name='favorite' />
                        Popular
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/artists/find">
                        <Icon name='search' />
                        Search
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/artists/join">
                        <Icon name='add user' />
                        Join
                      </Link>
                    </Menu.Item>
                  </Menu.Menu>
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
                    <Menu.Item>
                      <Link to="/shop/browse">
                        <Icon name='numbered list' />
                        Browse
                      </Link>
                    </Menu.Item>
                  </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Support</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item>
                      <Link to="/support/about">
                        <Icon name='search' />
                        About
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/support/contact">
                        <Icon name='facebook square' />
                        Contact
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/support/faqs">
                        <Icon name='question circle' />
                        How Stuff works
                      </Link>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={13}>
            <Segment>
              {this.props.children}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
