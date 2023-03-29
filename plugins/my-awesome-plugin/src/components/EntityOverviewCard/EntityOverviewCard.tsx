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

export const EntityOverviewCard = () => {

    return (
        <Content>
          <Grid container spacing={3} direction="column">
            <Grid item>
              <InfoCard title="My awesome plugin card">
                <Typography variant="body1">
                  Hello from my awesome plugin
                  {/*use entity hook*/}
                </Typography>
              </InfoCard>
            </Grid>
          </Grid>
        </Content>
    );
};