import React from 'react'

const FeedItem = ({ post: { id, title, body } }) => {
  return (
    <article key={id}>
      <h3>
        {id}.{title}
      </h3>
      <p>{body}</p>
    </article>
  )
}

export default FeedItem
