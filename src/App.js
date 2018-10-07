import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPosts } from './actions'

import Loader from './component/Loader/Loader'
import Feed from './component/Feed/Feed'
import Error from './component/Error/Error'

class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <main>
        <Error />
        <Loader />
        <Feed />
      </main>
    )
  }
}

const mapDispatchToProps = {
  getPosts: getPosts
}

export default connect(
  null,
  mapDispatchToProps
)(App)
