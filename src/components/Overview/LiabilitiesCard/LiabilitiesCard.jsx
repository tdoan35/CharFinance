import React, { useState, useEffect } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, Typography, Divider, IconButton, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AttachMoney, AccountBalance, AccountBalanceWallet, Assessment, Book, Home, Edit } from '@material-ui/icons';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import LiabilitiesList from './LiabilitiesList/LiabilitiesList';
import useStyles from './styles';

const LiabilitiesCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleTypeChange = (event) => {
    setDebt(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const [debt, setDebt] = useState('');
  const [amount, setAmount] = useState('');

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const submitString = 'username=' + props.username + '&' + debt + '=' + amount;

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: submitString
    }

    fetch('http://localhost:3000/api/addDebt', requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProfile(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

    setOpen(false);
  };


  const [editOpen, setEditOpen] = useState(false);
  const handleEditTypeChange = (event) => {
    setEditAsset(event.target.value);
  };

  const handleEditAmountChange = (event) => {
    setEditAmount(Number(event.target.value));
  };
  
  const handleEditClickOpen = () => {
    setEditOpen(true);
  };
  
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const [editDebt, setEditDebt] = useState('');
  const [editAmount, setEditAmount] = useState('');

  const [isEditLoaded, setIsEditLoaded] = useState(false);
  const [editError, setEditError] = useState(null);

  const handleEditSubmit = () => {
    const submitString = 'username=' + props.username + '&' + editDebt + '=' + editAmount;

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: submitString
    }

    fetch('http://localhost:3000/api/editDebt', requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          setIsEditLoaded(true);
          setEditAmount(result);
        },
        (error) => {
          setIsEditLoaded(true);
          setEditError(error);
        }
      )

    setEditOpen(false);
  };


  

  const classes = useStyles();

  


  return (
    <div>
      {/* --------------------- LIABILITIES CARD --------------------- */}
      <Card className={classes.cardRoot}>
        <CardContent className={classes.CardContent}>
          <Typography variant="overline" display="block">
            Liabilities
          </Typography>
          <Divider />
            <LiabilitiesList 
              liabilities={props.liabilities}
            />
          <Divider />
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" onClick={handleEditClickOpen}>Edit Debt</Button>
          <Dialog disableBackdropClick disableEscapeKeyDown open={editOpen} onClose={handleEditClose}>
            <DialogTitle>Add a Liability</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-dialog-native">Debt Type</InputLabel>
                  <Select
                    native
                    value={editDebt}
                    onChange={handleEditTypeChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option aria-label="None" value="" />
                    <option value={'creditCards'}>Credit Cards</option>
                    <option value={'mortgages'}>Mortgages</option>
                    <option value={'loans'}>Loans</option>
                    <option value={'accountsPayable'}>Accounts Payable</option>
                    <option value={'billsPayable'}>Bills Payable</option>
                    <option value={'taxPayables'}>Tax Payables</option>
                    <option value={'otherDebts'}>Other Debts</option>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={editAmount}
                      onChange={handleEditAmountChange}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      labelWidth={60}
                    />
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleEditSubmit} color="primary">
                Edit
              </Button>
              <Button onClick={handleEditSubmit} variant="contained" color="secondary" size="small">
                Delete
              </Button>
            </DialogActions>
          </Dialog>








          <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>Add Debt</Button>
          <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Add a Liability</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-dialog-native">Debt Type</InputLabel>
                  <Select
                    native
                    value={debt}
                    onChange={handleTypeChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option aria-label="None" value="" />
                    <option value={'creditCards'}>Credit Cards</option>
                    <option value={'mortgages'}>Mortgages</option>
                    <option value={'loans'}>Loans</option>
                    <option value={'accountsPayable'}>Accounts Payable</option>
                    <option value={'billsPayable'}>Bills Payable</option>
                    <option value={'taxPayables'}>Tax Payables</option>
                    <option value={'otherDebts'}>Other Debts</option>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={amount}
                      onChange={handleAmountChange}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      labelWidth={60}
                    />
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
      {/* --------------------- CLOSE LIABILITIES CARD --------------------- */} 
    </div>
  )
}

export default LiabilitiesCard
