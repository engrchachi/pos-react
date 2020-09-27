import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import {Link} from 'react-router-dom';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import IconButton from '@material-ui/core/IconButton';
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  title: {
    flexGrow: 1
  }
});

const TransDashboard = () => {
  const classes = useStyles();
 
  return (
    <React.Fragment>
      <Title>Total Sales</Title>
      <Typography component="p" variant="h4">
       9999
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 16 March, 2020
      </Typography>
      <div>
        <IconButton component={Link} to="/sales/newTransact" color="inherit">
          <HomeRoundedIcon/>
        </IconButton>
      </div>
    </React.Fragment>
  );
}
export default TransDashboard;