import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Divider } from '@material-ui/core';

import AssetsCard from './AssetsCard/AssetsCard';
import LiabilitiesCard from './LiabilitiesCard/LiabilitiesCard';
import CashflowCard from './CashflowCard/CashflowCard';
import NetworthCard from './NetworthCard/NetworthCard';

import ChartCard from './ChartCard/ChartCard';


import useStyles from './styles';

const Overview = (props) => {

  const classes = useStyles();

  return (
    <div>
      <Typography variant="overline" display="block">
        Overview
      </Typography>
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">
          Good Evening, {props.firstName}
        </Box>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        <Box>
          Here's what's happening with your balance sheet today
        </Box>
      </Typography>
      <Divider style={{marginBottom: '16px'}}/>
      <Grid container className={classes.root} spacing={3} gutterBottom>
        <Grid item xs={3}>
          <AssetsCard 
            username={props.username}
            assets={props.assets}
          />
        </Grid>
        <Grid item xs={3}>
          <LiabilitiesCard 
            username={props.username}
            liabilities={props.liabilities}
          />
        </Grid>
        <Grid item xs={3}>
          <CashflowCard />
        </Grid>
        <Grid item xs={3}>
          <NetworthCard 
            assets={props.assets}
            liabilities={props.liabilities}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={3} gutterBottom>
        <Grid item xs={6}>
          <ChartCard />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography paragraph style={{paddingTop: '16px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
              facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
              arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
              donec massa sapien faucibus et molestie ac.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Overview
