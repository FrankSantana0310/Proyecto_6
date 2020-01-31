import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    background: 'linear-gradient(105deg, rgba(70,121,9,1) 31%, rgba(0,212,255,1) 100%, rgba(0,7,36,1) 100%)'
  },
}));

export default function PaperSheet({frase, getQuote}) {
  const classes = useStyles();

  return (
    <Fragment>
        <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
       {frase.author}
      </Typography>
      <Typography component="p">
       {frase.quote}
      </Typography>
     
    </Paper>

<Button onClick={getQuote} size="small" variant="outlined" color="primary" className={classes.button}>
Get a different quote
</Button>
    </Fragment>
  );
}