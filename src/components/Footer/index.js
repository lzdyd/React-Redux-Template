import React from 'react';
import { Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <Grid container centered columns={ 4 }>
        <GridRow>
          <GridColumn>

          </GridColumn>
        </GridRow>
      </Grid>

      <Button
        color='black'
        content='Github'
        icon='github'
        label={{
          as: 'a',
          basic: true,
          color: 'black',
          pointing: 'left',
          content: 'lzdyd',
          href: 'https://github.com/lzdyd/React-Redux-Template/tree/reactTestApp',
          target: '_blank'
        }}
      />
    </footer>
  );
};

export default Footer;
