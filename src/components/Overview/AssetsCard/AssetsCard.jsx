import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, Typography, Divider, IconButton, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { AttachMoney, AccountBalance, AccountBalanceWallet, Assessment, Book, Home, Edit } from '@material-ui/icons';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import AssetsList from './AssetsList/AssetsList';
import useStyles from './styles';


const AssetsCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleTypeChange = (event) => {
    setAsset(event.target.value);
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
  const [asset, setAsset] = useState('');
  const [amount, setAmount] = useState('');
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const submitString = 'username=' + props.username + '&' + asset + '=' + amount;

    setAssets({
      ...assets,
      asset : amount
    });


    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: submitString
    }

    fetch('http://localhost:3000/api/addAsset', requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAmount(result);
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
  const [editAsset, setEditAsset] = useState('');
  const [editAmount, setEditAmount] = useState('');

  const [isEditLoaded, setIsEditLoaded] = useState(false);
  const [editError, setEditError] = useState(null);

  const handleEditSubmit = () => {

    const submitString = 'username=' + props.username + '&' + editAsset + '=' + editAmount;

    // setEditAssets({
    //   ...editAssets,
    //   editAsset : editAmount
    // });


    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: submitString
    }

    fetch('http://localhost:3000/api/editAsset', requestOptions)
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



  const [assets, setAssets] = useState(props.assets);

  const classes = useStyles();



  return (
    <div>
      {/* --------------------- ASSETS CARD --------------------- */}
      <Card className={classes.cardRoot}>
        <CardContent className={classes.CardContent}>
          <Typography variant="overline" display="block">
            Assets
          </Typography>
          <Divider />
            {/* {AssetsList(props.assets)} */}
            <AssetsList 
              assets={props.assets}
            />
          <Divider />
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" onClick={handleEditClickOpen}>Edit Asset</Button>
          <Dialog disableBackdropClick disableEscapeKeyDown open={editOpen} onClose={handleEditClose}>
            <DialogTitle>Edit an Asset</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-dialog-native">Asset Type</InputLabel>
                  <Select
                    native
                    value={editAsset}
                    onChange={handleEditTypeChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option aria-label="None" value="" />
                    <option value={'cash'}>Cash</option>
                    <option value={'savings'}>Savings</option>
                    <option value={'checking'}>Checking</option>
                    <option value={'securities'}>Securities</option>
                    <option value={'properties'}>Properties</option>
                    <option value={'investments'}>Investments</option>
                    <option value={'otherAssets'}>Other Assets</option>
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





          <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>Add Asset</Button>
          <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Add an Asset</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-dialog-native">Asset Type</InputLabel>
                  <Select
                    native
                    value={asset}
                    onChange={handleTypeChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option aria-label="None" value="" />
                    <option value={'cash'}>Cash</option>
                    <option value={'savings'}>Savings</option>
                    <option value={'checking'}>Checking</option>
                    <option value={'securities'}>Securities</option>
                    <option value={'properties'}>Properties</option>
                    <option value={'investments'}>Investments</option>
                    <option value={'otherAssets'}>Other Assets</option>
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
      {/* --------------------- CLOSE ASSETS CARD --------------------- */} 
    </div>
  )
}


export default AssetsCard;