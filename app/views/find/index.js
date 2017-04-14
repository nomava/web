/*import React, { Component } from 'react'
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

export default Find;*/
import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Container, Search, Grid, Header, Icon } from 'semantic-ui-react'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

export default class Find extends Component {
  constructor(props) {
    super(props);

    // Set up initial state
    this.state = { activeItem: 'gamepad' }

    // Functions must be bound manually with ES6 classes
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetComponent = this.resetComponent.bind(this);
  }
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent(){
    this.setState({ isLoading: false, results: [], value: '' })
  }
  handleResultSelect(e, result){
    this.setState({ value: result.title })
  }

  handleSearchChange(e, value){
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='search' circular />
          <Header.Content>
            Search
          </Header.Content>
        </Header>
        <Container textAlign='center'>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
            fluid
          />
      </Container>
      </div>
    )
  }
}
