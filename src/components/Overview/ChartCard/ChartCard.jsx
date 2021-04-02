import React from 'react'
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Typography, Divider, List } from '@material-ui/core';
import { Doughnut } from '@reactchartjs/react-chart.js';
import { Bar } from '@reactchartjs/react-chart.js'

import useStyles from './styles';

const rand = () => Math.round(Math.random() * 20 - 10)

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
}



const ChartCard = () => {

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
            <Box alignItems="center" mt={3} style={{height: '220px'}}>
              <Bar 
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
        <CardActions className={classes.CardActions}>
          <Button variant="outlined" size="small">Show All</Button>
          <Button variant="contained" color="secondary" size="small">Income</Button>
          <Button variant="contained" color="primary" size="small">Expenses</Button>
        </CardActions>
      </Card>
      {/* --------------------- CLOSE CASH FLOW CARD --------------------- */}
    </div>
  )
}

export default ChartCard
