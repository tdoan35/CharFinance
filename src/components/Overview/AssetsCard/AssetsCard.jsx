import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, Typography, Divider, IconButton, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AttachMoney, AccountBalance, AccountBalanceWallet } from '@material-ui/icons';


const AssetsCard = () => {

  return (
    <div>
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
    </div>
  );
}


export default AssetsCard;