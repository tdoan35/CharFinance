import React from 'react';
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Typography, Divider, List } from '@material-ui/core';
import { Doughnut } from '@reactchartjs/react-chart.js';

import useStyles from './styles';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

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
            <Box alignItems="center" mt={3}>
              <Doughnut 
                data={data} 
                options={{
                  legend:{display: false},
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
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
