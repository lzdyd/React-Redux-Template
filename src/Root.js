import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Layout from './Layout';
import App from './containers/App';

import configureStore from './store/configureStore';

import 'semantic-ui-css/semantic.min.css';
import './common/style.scss';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Layout/>
      </Provider>
    );
  }
}
