import React, {Component} from 'react'
import {
    Grid,
    Container,
    Label,
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header
} from 'semantic-ui-react'
import {Link} from 'react-router'
import Find from '../../views/find'

export class Navbar extends Component {
    constructor(props) {
        super(props);

        // Set up initial state
        this.state = {
            activeItem: 'gamepad'
        }

        // Functions must be bound manually with ES6 classes
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}) {
        this.setState({activeItem: name})
    }
    render() {
        const {activeItem} = this.state
        return (
            <div >
                <Grid>
                    <Grid.Row >
                        <Grid.Column inverted width={16}>
                            <Segment inverted>
                                <Menu inverted pointing secondary stackable>
                                    <Menu.Item header color='white'>
                                        <Link to="/">
                                            <Icon name='home'/>
                                            Nomava
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/articles">
                                            <Icon name='wait'/>
                                            Articles
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/recent">
                                            <Icon name='hashtag'/>
                                            Recently Added
                                        </Link>
                                        <Label>1</Label>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/random">
                                            <Icon name='unordered list'/>
                                            Random
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/find">
                                            <Icon name='about'/>
                                            About
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/donate">
                                            <Icon name='group'/>
                                            Donate
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <Link to="/support/about">
                                            <Icon name='question circle'/>
                                            Support
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button primary>Sign up</Button>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <Button>Log-in</Button>
                                    </Menu.Item>
                                </Menu>
                                <Container textAlign='center'>
                                    <Find/>
                                </Container>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column center stretched width={16}>
                            <Container textAlign='center'>
                                <Segment padded className="main-control">
                                    {this.props.children}
                                </Segment>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
