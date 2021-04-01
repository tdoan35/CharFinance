import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent,  Grid, Typography, Divider, Paper, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AttachMoney, AccountBalance, AccountBalanceWallet, Edit } from '@material-ui/icons';

import AssetsCard from './AssetsCard/AssetsCard';
import useStyles from './styles';

const Overview = () => {
  const [name, setName] = useState({ 
    firstName: '', 
    lastName: '',
    username: ''
  });

  const classes = useStyles();

  useEffect( () => {
    fetch('http://localhost:3000/api/getUser')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setName(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);


  return (
    <div>
      <Typography variant="overline" display="block">
        Overview
      </Typography>
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">
          Good Evening, {name.firstName}
        </Box>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        <Box>
          Here's what's happening with your balance sheet today
        </Box>
      </Typography>
      <Divider style={{marginBottom: '16px'}}/>
      <Grid container className={classes.root} spacing={4} gutterBottom>
        <Grid item xs={3}>

        {/* --------------------- ASSETS CARD --------------------- */}
          <Card className={classes.cardRoot}>
            <CardContent className={classes.CardContent}>
              <Typography variant="overline" display="block">
                Assets
              </Typography>
              <Divider />
              <List className={classes.list}>
                {/*--------------------- LIST ITEMS ---------------------*/}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarIncome}>
                      <IconButton onClick="#" style={{color: "white"}}>
                        <AttachMoney />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Cash" secondary="$3,128"></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarIncome}>
                      <IconButton onClick="#" style={{color: "white"}}>
                        <AccountBalance />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Savings" secondary="$13,698"></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarIncome}>
                      <IconButton onClick="#" style={{color: "white"}}>
                        <AccountBalanceWallet />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Checking" secondary="$7,362"></ListItemText>
                </ListItem>
                {/* ----------------------------------------------------- */}
              </List>
              <Divider />
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">Show All</Button>
              <Button variant="contained" size="small" color="primary">Add Asset</Button>
            </CardActions>
          </Card>
        {/* --------------------- CLOSE ASSETS CARD --------------------- */} 

        </Grid>
        <Grid item xs={3}>

          {/* --------------------- LIABILITIES CARD --------------------- */}
          <Card className={classes.cardRoot}>
            <CardContent className={classes.CardContent}>
              <Typography variant="overline" display="block">
                Liabilities
              </Typography>
              <Divider />
              <List className={classes.list}>
                {/*--------------------- LIST ITEMS ---------------------*/}
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarExpense}>
                      <IconButton onClick="#" style={{color: "white"}}>
                        <AttachMoney />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Credit Cards" secondary="$1,458"></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarExpense}>
                      <IconButton onClick="#" style={{color: "white"}}>
                        <AccountBalance />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Mortgages" secondary="$153,698"></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarExpense}>
                      <IconButton onClick="#" style={{color: "white"}}>
                        <AccountBalanceWallet />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Loans" secondary="$2,362"></ListItemText>
                </ListItem>
                {/* ----------------------------------------------------- */}
              </List>
              <Divider />
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">Show All</Button>
              <Button variant="contained" size="small" color="primary">Add Debt</Button>
            </CardActions>
          </Card>
          {/* --------------------- CLOSE LIABILITIES CARD --------------------- */} 

        </Grid>
        <Grid item xs={3}>


          {/* --------------------- CASH FLOW CARD --------------------- */}
          <Card className={classes.cardRoot}>
            <CardContent className={classes.CardContent}>
              <Typography variant="overline" display="block">
                Cash Flow
              </Typography>
              <Divider />
              <List className={classes.list}>
                {/*--------------------- LIST ITEMS ---------------------*/}
                
                {/* ----------------------------------------------------- */}
              </List>
              <Divider />
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">Show All</Button>
              <ButtonGroup variant="contained" size="small" >
                <Button color="primary">In</Button>
                <Button color="secondary">Out</Button>
              </ButtonGroup>
            </CardActions>
          </Card>
          {/* --------------------- CLOSE CASH FLOW CARD --------------------- */}


        </Grid>
        <Grid item xs={3}>


          {/* --------------------- NET WORTH CARD --------------------- */}
          <Card className={classes.cardRoot}>
            <CardContent className={classes.CardContent}>
              <Typography variant="overline" display="block">
                Net Worth
              </Typography>
              <Divider />
              <List className={classes.list}>
                {/*--------------------- LIST ITEMS ---------------------*/}
                
                {/* ----------------------------------------------------- */}
              </List>
              <Divider />
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">Show More</Button>
            </CardActions>
          </Card>
          {/* --------------------- CLOSE NET WORTH CARD --------------------- */}


        </Grid>
      </Grid>




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
    </div>
  )
}

export default Overview
