import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeedItem from './FeedItem'

import './Feed.css'

class Feed extends Component {
  render() {
    const { posts } = this.props
    return posts ? (
      <section className="news-item">
        {posts.map(post => (
          <FeedItem post={post} />
        ))}
      </section>
    ) : (
      <article />
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(
  mapStateToProps,
  null
)(Feed)
