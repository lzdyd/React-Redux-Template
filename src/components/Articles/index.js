import React from 'react';
import { Grid, GridRow, GridColumn, Card, Image } from 'semantic-ui-react';

import './style.scss';

const Articles = ({ articles }) => {
  return (
    <div className="articles">
      <Grid container={ true } columns={ 2 }>
        <GridRow>
          {
            articles.map((article) => {
              return (
                <GridColumn key={ article.id }>
                  <Card centered fluid>
                    <Image src={ article.image } />

                    <Card.Content>
                      <Card.Header>
                        { article.author }
                      </Card.Header>

                      <Card.Meta>
                    <span className='date'>
                      { article.joined }
                    </span>
                      </Card.Meta>

                      <Card.Description>
                        { article.description }
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </GridColumn>
              );
            })
          }
        </GridRow>
      </Grid>
    </div>
  );
};

export default Articles;
