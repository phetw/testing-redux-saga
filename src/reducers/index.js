const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return { ...state, loading: true }
    case 'REQUEST_POSTS_SUCCESS':
      return { ...state, posts: action.posts, loading: false }
    case 'REQUEST_POSTS_ERROR':
      return { ...state, error: true }
    default:
      return state
  }
}
export default reducer
