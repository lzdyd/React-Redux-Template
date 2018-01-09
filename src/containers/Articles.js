import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AppActions from '../actions/ArticlesActions';

import ArticlesView from '../components/Articles/index';

class Articles extends Component {
  componentDidMount() {
    this.props.articlesActions.getAtricles();
  }

  render() {
    const { fetching, articles } = this.props.articles;

    return (
      fetching ?
        <div>Loading...</div> :
        <ArticlesView articles={ articles } />
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
  articlesActions: bindActionCreators(AppActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
