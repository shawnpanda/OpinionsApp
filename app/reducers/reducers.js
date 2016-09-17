import { combineReducers } from 'redux'
import commentReducer from './commentReducers'


const rootReducer = combineReducers({
  comment: commentReducer
})

export default rootReducer