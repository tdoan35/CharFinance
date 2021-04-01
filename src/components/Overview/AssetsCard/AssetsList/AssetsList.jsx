import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AttachMoney, AccountBalance, AccountBalanceWallet, Assessment, Book, Home, Edit } from '@material-ui/icons';

import useStyles from './styles';

const AssetsList = (props) => {

  // props.assets = {
  //   cash: 120,
  //   savings: 1450,
  //   checking: 160,
  //   securities: 6130,
  //   properties: 0,
  //   investments: 0,
  //   otherAssets: 0,
  // }

  const makeDisplayList = (assets) => {
    const assetTypes = Object.keys(assets);
    const displayList = [];

    assetTypes.forEach(element => {
      if (assets[element] !== 0) {
        
        switch (element) {
          case 'cash':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <AttachMoney />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Cash' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
          case 'savings':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <AccountBalance />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Savings' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
          case 'checking':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <AccountBalanceWallet />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Checking' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
          case 'securities':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <Assessment />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Securities' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
          case 'properties':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Properties' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
          case 'investments':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <Book />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Investments' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
          default:
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarIncome}>
                    <AttachMoney />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Other Assets' 
                  secondary={`$${assets[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
                <IconButton onClick="#">
                  <Edit />
                </IconButton>
              </ListItem>
            )
            break;
        }
        
      }
    })

    return displayList;
  }

  const classes = useStyles();

  return (
    <div>
      <List className={classes.list}>
        {makeDisplayList(props.assets)}
      </List>
    </div>
  )
}

export default AssetsList;
