import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="ui container">
          <div class="ui equal width grid">
            <div class="column">
              <div class="ui segment">1</div>
            </div>
            <div class="eight wide column">
              <div class="ui segment">2</div>
            </div>
            <div class="column">
              <div class="ui segment">3</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
