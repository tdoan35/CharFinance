import React from 'react'
import { Button, ButtonGroup, Card, CardActions, CardContent, Typography, Divider, List } from '@material-ui/core';

import useStyles from './styles';

const CashflowCard = () => {
  
  const classes = useStyles();

  return (
    <div>
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
    </div>
  )
}

export default CashflowCard
