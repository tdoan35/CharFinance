import React from 'react'
import { Button, Card, CardActions, CardContent, Typography, Divider, List } from '@material-ui/core';

import useStyles from './styles';

const NetworthCard = () => {

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
