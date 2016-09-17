import { combineReducers } from 'redux'
// import { commentReducer } from './commentReducers'
// import { profileReducer } from './profileReducers'

function commentReducer(state=['a'], action) {
  switch (action.type) {
    case 'a':
      return state;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  comment: commentReducer
})

export default rootReducer