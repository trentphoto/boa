import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'
import { urlBase } from '../../../config'

const initialState: types.PostState = {
  allPosts: {
    error: null,
    loading: true,
    data: []
  }
}

const allPosts = (
  state: types.PostState['allPosts'] = initialState.allPosts,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_POSTS_REQUEST:
      return { error: null, loading: true, data: [] }
    case types.FETCH_ALL_POSTS_SUCCESS:
      const postsArr = action.payload.posts.map(i => ({
        title: i.acf.title,
        id: i.acf.number,
        notes: i.acf.notes,
        letter: i.acf.letter,
        url: i.acf.url,
        excerpt: i.acf.excerpt,
        image: i._embedded
          ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
          : null
      }))
      return { ...state, loading: false, data: postsArr }
    case types.FETCH_ALL_POSTS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ allPosts })
