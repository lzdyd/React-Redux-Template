import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Layout from './Layout';
import Header from './containers/Header';
import Footer from './components/Footer';
import RootPage from './components/RootPage';
import App from './containers/App';

import configureStore from './store/configureStore';

import 'semantic-ui-css/semantic.min.css';
import './common/style.scss';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <Header />

          <RootPage/>

          <Footer/>
        </div>
      </Provider>
    );
  }
}
