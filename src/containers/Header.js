import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <header className={ `page-header ${this.state.menuOpen ? 'menu-opened' : 'menu-closed'}` } style={{ marginBottom: '1rem' }}>
        <Grid container columns={ 3 }>
          <GridRow style={{ paddingBottom: '0' }}>

            <GridColumn mobile={ 10 } computer={ 10 } tablet={ 8 }>
              <Link to="/" className="page-header__logo"><Icon className="page-header__logo-icon" name='umbrella'/></Link>
            </GridColumn>

            <GridColumn verticalAlign='middle' floated='right' only='mobile' className="page-header__menu-col">
              <div className="page-header__menu-collapse" onClick={ this.toggleMenu }>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </GridColumn>

            <GridColumn mobile={ 10 } computer={ 6 } tablet={ 8 } className="page-header__nav-col" textAlign="right">
              <nav className='page-header__nav'>
                <ul>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/articles">Articles</Link></li>
                  <li className="auth_btn">
                    <Button color='facebook' style={{ marginRight: '0' }}>Log in</Button>
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
