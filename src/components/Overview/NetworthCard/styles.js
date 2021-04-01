import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  cardRoot: {
    flexGrow: 1,
    height: 350,
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'leftAlign',
    color: theme.palette.text.secondary,
  },
  cardContent: {
    maxHeight: 300,
  },
  list: {
    height: '220px',
    maxHeight: '220px',
    overflow: 'auto',
  },
}));