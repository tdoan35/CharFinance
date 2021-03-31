import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
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
  paper: {
    height: 300,
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'leftAlign',
    color: theme.palette.text.secondary,
  },
  avatarIncome: {
    color: '#fff',
    backgroundColor: 'green',
  },
  avatarExpense: {
    color: '#fff',
    backgroundColor: '#aa2e25',
  },
  list: {
    height: '220px',
    maxHeight: '220px',
    overflow: 'auto',
  },
}));