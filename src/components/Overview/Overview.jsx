import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Divider } from '@material-ui/core';

import AssetsCard from './AssetsCard/AssetsCard';
import LiabilitiesCard from './LiabilitiesCard/LiabilitiesCard';
import CashflowCard from './CashflowCard/CashflowCard';
import NetworthCard from './NetworthCard/NetworthCard';

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
          />
        </Grid>
        <Grid item xs={3}>
          <LiabilitiesCard 
            username={props.username}
          />
        </Grid>
        <Grid item xs={3}>
          <CashflowCard />
        </Grid>
        <Grid item xs={3}>
          <NetworthCard />
        </Grid>
      </Grid>
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
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </div>
  )
}

export default Overview
