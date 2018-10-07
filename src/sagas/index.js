import { delay } from 'redux-saga'
import { call, put, takeLatest, all } from 'redux-saga/effects'

import getPostAPI from '../api'

export function* fetchPosts() {
  yield call(delay, 800)
  try {
    const { data } = yield call(getPostAPI)
    yield put({ type: 'REQUEST_POSTS_SUCCESS', posts: data })
  } catch (error) {
    yield put({ type: 'REQUEST_POSTS_ERROR' })
  }
}
function* actionWatcher() {
  yield takeLatest('REQUEST_POSTS', fetchPosts)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
