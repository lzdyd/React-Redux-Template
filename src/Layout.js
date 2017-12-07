import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Icon, Button } from 'semantic-ui-react';

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
      <div className="main-app">
{/*        <header className={ `page-header ${this.state.menuOpen ? 'menu-opened' : 'menu-closed'}` }>
          <Grid container={ true } columns={ 3 } style={{ marginBottom: '0' }}>
            <GridRow style={{ paddingBottom: '0' }}>

              <GridColumn mobile={ 10 } computer={ 10 } tablet={ 8 }>
                <Icon className="page-header__logo" name='umbrella'/>
              </GridColumn>

              <GridColumn verticalAlign={ 'middle' } floated={ 'right' } only={ 'mobile' } className="page-header__menu-col">
                <div className="page-header__menu-collapse" onClick={ this.toggleMenu }>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </GridColumn>

              <GridColumn mobile={ 10 } computer={ 6 } tablet={ 8 } className="page-header__nav-col">
                <nav className='page-header__nav'>
                  <ul>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li className="auth_btn">
                      <Button color={ 'facebook' }>Log in</Button>
                    </li>
                  </ul>
                </nav>
              </GridColumn>
            </GridRow>
          </Grid>
        </header>

        <footer className="page-footer">
          <Grid container={ true }>
            <GridColumn style={{ paddingTop: '0' }}>
              <h1>test</h1>
            </GridColumn>
          </Grid>
        </footer>*/}

        <header className={ `page-header ${this.state.menuOpen ? 'menu-opened' : 'menu-closed'}` }>

        </header>
      </div>
    );
  }
}
