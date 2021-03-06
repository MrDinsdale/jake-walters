import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import contentReducer from './content';

export default combineReducers({
  routing: routerReducer,
  content: contentReducer
})