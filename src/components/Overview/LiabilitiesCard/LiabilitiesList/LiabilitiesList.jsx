import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AttachMoney, AccountBalance, AccountBalanceWallet, Assessment, Book, Home, Edit } from '@material-ui/icons';

import useStyles from './styles';



const LiabilitiesList = (props) => {

  const makeDisplayList = (debts) => {
    const debtTypes = Object.keys(debts);
    const displayList = [];

    debtTypes.forEach(element => {
      if (debts[element] !== 0) {
      
        switch (element) {
          case 'creditCards':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <AttachMoney />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Credit Cards' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </ListItem>
            )
            break;
          case 'mortgages':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <AccountBalance />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Mortgages' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </ListItem>
            )
            break;
          case 'loans':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <AccountBalanceWallet />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Loans' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </ListItem>
            )
            break;
          case 'accountsPayable':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <Assessment />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Accounts Payable' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </ListItem>
            )
            break;
          case 'billsPayable':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Bills Payable' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </ListItem>
            )
            break;
          case 'taxPayables':
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <Book />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Tax Payables' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </ListItem>
            )
            break;
          default:
            displayList.push(
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarExpense}>
                    <AttachMoney />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary='Other Debts' 
                  secondary={`$${debts[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
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
        {makeDisplayList(props.liabilities)}
      </List>
    </div>
  )
}

export default LiabilitiesList;