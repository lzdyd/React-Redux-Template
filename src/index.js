import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { Router, Route, browserHistory, IndexRoute, Switch } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './containers/App';

import configureStore from './store/configureStore';

import './common/style.scss';

const store = configureStore();

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
