import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  profilePaper: {
    margin: 'auto',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));