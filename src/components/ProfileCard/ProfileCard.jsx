import React, { useState, useEffect } from 'react';
import { Grid, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

import useStyles from './styles';

const ProfileCard = () => {
  const [name, setName] = useState({ 
    firstName: '', 
    lastName: '',
    username: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();

  useEffect( () => {
    fetch('http://localhost:3000/api/getUser')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setName(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

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
                  primary={name.firstName + ' ' + name.lastName}
                  secondary={name.username}
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