import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography, Divider, List } from '@material-ui/core';

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
            <Grid container className={classes.grow} >
              <Grid item xs={12}>
                <Paper className={classes.profilePaper} style={{backgroundColor: 'rgba(236, 239, 241, 0.25)'}}>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography variant="h5"><strong>$178,938</strong></Typography>
                    <Typography variant="overline" gutterBottom>Net Total</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.profilePaper} style={{backgroundColor: 'rgba(53, 115, 11, 0.25)'}}>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography variant="h5">$298,438</Typography>
                    <Typography variant="overline" gutterBottom>Assets</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.profilePaper} style={{backgroundColor: '#ffd1d1'}}>
                  <Box mt={2} display="flex" justifyContent="space-between">
                    <Typography variant="h5">($119,500)</Typography>
                    <Typography variant="overline" gutterBottom>Assets</Typography>
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
