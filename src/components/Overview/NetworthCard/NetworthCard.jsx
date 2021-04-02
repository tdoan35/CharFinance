import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography, Divider, List } from '@material-ui/core';

import useStyles from './styles';

const NetworthCard = (props) => {

  // props.assets = {}
  // props.assets = {}


  // const assets = props.assets;
  // const liabilities = props.liabilities;

  const totalAssetValue = (
    props.assets.cash +
    props.assets.savings +
    props.assets.checking +
    props.assets.securities +
    props.assets.properties +
    props.assets.investments +
    props.assets.otherAssets
  );

  const totalDebtValue = (
    props.liabilities.creditCards +
    props.liabilities.mortgages +
    props.liabilities.loans +
    props.liabilities.accountsPayable +
    props.liabilities.billsPayable +
    props.liabilities.taxPayables +
    props.liabilities.otherDebts 
  );

  const totalNetWorth = totalAssetValue - totalDebtValue;
  
  const netWorth = () => {
    if (totalNetWorth > 0) {
      const pos = `$${totalNetWorth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      return pos;
    } else {
      const neg = `($${totalNetWorth.toString().slice(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`
      return neg;
    }
  }


  const classes = useStyles();

  return (
    <div>
      {/* --------------------- NET WORTH CARD --------------------- */}
      <Card className={classes.cardRoot}>
        <CardContent className={classes.CardContent}>
          <Typography variant="overline" display="block">
            Net Worth
          </Typography>
          <Divider />
          <List className={classes.list}>
            {/*--------------------- LIST ITEMS ---------------------*/}
            <Grid container className={classes.grow} >
              <Grid item xs={12}>
                <Paper className={classes.profilePaper} style={{backgroundColor: 'rgba(236, 239, 241, 0.25)'}}>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography variant="h5"><strong>{netWorth()}</strong></Typography>
                    <Typography variant="overline" gutterBottom>Net Total</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.profilePaper} style={{backgroundColor: 'rgba(53, 115, 11, 0.25)'}}>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography variant="h5">{`$${totalAssetValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Typography>
                    <Typography variant="overline" gutterBottom>Assets</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.profilePaper} style={{backgroundColor: '#ffd1d1'}}>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography variant="h5">{`($${totalDebtValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`}</Typography>
                    <Typography variant="overline" gutterBottom>Debts</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            {/* ----------------------------------------------------- */}
          </List>
          <Divider />
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small">Show More</Button>
        </CardActions>
      </Card>
      {/* --------------------- CLOSE NET WORTH CARD --------------------- */}
    </div>
  )
}

export default NetworthCard
