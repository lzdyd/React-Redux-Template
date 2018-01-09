import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import configureStore from './store/configureStore';

import 'semantic-ui-css/semantic.min.css';
import './common/style.scss';

import Header from './containers/Header';
import RootPage from './components/RootPage/RootPage';
import Articles from './containers/Articles';
import NotFound from './components/NotFound/index';

const history = createHistory();

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={ RootPage } />
              <Route path="/articles" component={ Articles } />
              <Route path="*" component={ NotFound } />
            </Switch>

          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
