import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  cardRoot: {
    flexGrow: 1,
    height: 400,
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'leftAlign',
    color: theme.palette.text.secondary,
  },
  cardContent: {
    maxHeight: 400,
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  list: {
    height: '270px',
    maxHeight: '270px',
    overflow: 'auto',
  },
}));