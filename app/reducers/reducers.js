'use strict'
import { combineReducers } from 'redux'
import commentReducer from './commentReducers'
import { Map, Record, List, fromJS } from 'immutable'

const Topic = Record({
    title: "Gun Control",
    article1Title: "Pro Gun Control",
    article1Link: "http://www.latimes.com/opinion/op-ed/la-oe-defilippis-hughes-gun-myths-debunked-20160708-snap-story.html",
    article2Title: "Against Gun Control",
    article2: "http://www.baltimoresun.com/news/opinion/editorial/bs-ed-guns-checks-20140219-story.html",
  });

export const topicInitialState = List([
  new (Record({
    title: "Gun Control",
    article1Title: "Pro Gun Control",
    article1Link: "http://www.latimes.com/opinion/op-ed/la-oe-defilippis-hughes-gun-myths-debunked-20160708-snap-story.html",
    article2Title: "Against Gun Control",
    article2: "http://www.baltimoresun.com/news/opinion/editorial/bs-ed-guns-checks-20140219-story.html",
  })),
  new (Record({
    title: "Gun Control",
    article1Title: "Pro Gun Control2",
    article1Link: "http://www.latimes.com/opinion/op-ed/la-oe-defilippis-hughes-gun-myths-debunked-20160708-snap-story.html",
    article2Title: "Against Gun Control",
    article2: "http://www.baltimoresun.com/news/opinion/editorial/bs-ed-guns-checks-20140219-story.html",
  })),
])

function topicReducer(state = topicInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}


const rootReducer = combineReducers({
  comment: commentReducer,
  topics: topicReducer
})

export default rootReducer