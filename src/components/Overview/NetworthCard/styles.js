import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
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
  profilePaper: {
    margin: 'auto',
    color: theme.palette.text.secondary,
    marginTop: '8px',
    paddingLeft: '8px',
    paddingRight: '16px',
    paddingBottom: '8px',
    paddingTop: '1px',
    border: '10px',
    borderColor: 'black',
    borderRadius: '8px',
  },
  list: {
    height: '220px',
    maxHeight: '220px',
    overflow: 'auto',
  },
}));