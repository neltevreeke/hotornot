import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// import futureReducer from './futureReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  // future reducers
})
