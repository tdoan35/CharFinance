import React from 'react';
import { Grid, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

import useStyles from './styles';

const ProfileCard = (props) => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.grow} style={{padding: '16px'}}>
        <Grid item xs={12}>
          <Paper className={classes.profilePaper}>
            <List className={classes.list}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Beth Harmon" src="src\assets\images\bethh.jpg"/>
                </ListItemAvatar>
                <ListItemText 
                  primary={props.firstName + ' ' + props.lastName}
                  secondary={props.username}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileCard;