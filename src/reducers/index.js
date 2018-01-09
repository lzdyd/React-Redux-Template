import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import articles from './articles';

export default combineReducers({
  app,
  articles,
  router: routerReducer
});
