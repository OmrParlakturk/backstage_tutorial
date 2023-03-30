import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

import { useEntity } from '@backstage/plugin-catalog-react'

export const EntityOverviewCard = () => {

    const { entity } = useEntity();
    
    return (
        <Content>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <InfoCard title="My awesome plugin card">
                <Typography variant="body1">
                  Hello from my awesome plugin
                  <br/>
                  you are on EntityPage of {entity.metdata}
                </Typography>
              </InfoCard>
            </Grid>
          </Grid>
        </Content>
    );
};