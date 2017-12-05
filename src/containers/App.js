import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AppActions from '../actions/AppActions';

import { Button, Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Hello world!</Header>

        <Button
          content='Discover docs'
          href='http://react.semantic-ui.com'
          icon='github'
          labelPosition='left'
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(AppActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
