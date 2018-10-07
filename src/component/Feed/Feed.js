import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Feed.css'

class Feed extends Component {
  render() {
    const { posts } = this.props
    return posts ? (
      <section className="news-item">
        {posts.map(({ id, title, body }) => (
          <article key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
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
