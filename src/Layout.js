import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Icon } from 'semantic-ui-react';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <header className="page-header">
        <Grid container={ true } columns={ 2 }>
          <GridRow style={{ paddingBottom: '0' }}>

            <GridColumn mobile={ 10 }>
              <Icon className="page-header__logo" name='umbrella'/>
            </GridColumn>

            <GridColumn verticalAlign={ 'middle' }>
              <nav className={ `page-header__nav ${this.state.menuOpen ? 'menu-opened' : 'menu-closed'}` }>
                <ul>
                  <li><a href="/users">Users</a></li>
                  <li><a href="/articles">Articles</a></li>
                  <li className="page-header__menu-collapse" onClick={ this.toggleMenu }>
                    <div></div>
                    <div></div>
                    <div></div>
                  </li>
                </ul>
              </nav>
            </GridColumn>

          </GridRow>
        </Grid>
      </header>
    );
  }
}
