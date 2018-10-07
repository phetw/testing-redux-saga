import assert from 'assert'
import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchPostsWatcher, fetchPosts } from './index'
import getPostAPI from '../api'

describe('POSTS', () => {
  test('fetchPosts watcher', () => {
    const gen = fetchPostsWatcher()
    assert.deepEqual(gen.next().value, takeLatest('REQUEST_POSTS', fetchPosts), 'it must take REQUEST_POSTS action')
  })

  test('fetchPosts [SUCCESS]', () => {
    const gen = fetchPosts()
    assert.deepEqual(gen.next().value, call(delay, 800), 'fetchPosts Saga must call delay(800)')
    assert.deepEqual(gen.next().value, call(getPostAPI), 'fetchPosts Saga must call getPostAPI()')
  })

  test('fetchPosts [FAILED]', () => {
    const gen = fetchPosts()
    assert.deepEqual(gen.next().value, call(delay, 800), 'fetchPosts Saga must call delay(800)')
    assert.deepEqual(gen.next().value, call(getPostAPI), 'fetchPosts Saga must call getPostAPI()')
    assert.deepEqual(gen.throw('error').value, put({ type: 'REQUEST_POSTS_ERROR' }), 'fetchPosts Saga must throw error')
  })
})
