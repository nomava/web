import React, {Component} from 'react'
import {Segment, Icon, Container, Header} from 'semantic-ui-react'

class Playlists extends Component {
    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='list' circular/>
                    <Header.Content>
                        Playlists
                    </Header.Content>
                </Header>
                <Container>
                    <Segment.Group horizontal>
                        <Segment inverted color='red' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Left</Segment>
                        <Segment inverted color='yellow' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Middle</Segment>
                        <Segment inverted color='green' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Right</Segment>
                        <Segment inverted color='black' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Left</Segment>
                        <Segment inverted color='yellow' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Middle</Segment>
                        <Segment inverted color='blue' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Right</Segment>
                    </Segment.Group>
                    <Segment.Group horizontal>
                        <Segment inverted color='yellow' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Left</Segment>
                        <Segment inverted color='red' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Middle</Segment>
                        <Segment inverted color='black' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Right</Segment>
                        <Segment inverted color='red' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Left</Segment>
                        <Segment inverted color='yellow' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Middle</Segment>
                        <Segment inverted color='blue' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Right</Segment>
                    </Segment.Group>
                    <Segment.Group horizontal>
                        <Segment inverted color='red' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Left</Segment>
                        <Segment inverted color='yellow' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Middle</Segment>
                        <Segment inverted color='blue' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Right</Segment>
                        <Segment inverted color='red' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Left</Segment>
                        <Segment inverted color='black' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Middle</Segment>
                        <Segment inverted color='blue' style={{
                            height: '25vh',
                            width: '10vw'
                        }} textAlign='center' padded='very' compact>Right</Segment>
                    </Segment.Group>
                </Container>

            </div>
        )
    }
}

export default Playlists;
