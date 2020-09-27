import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu'; 
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {Link} from 'react-router-dom';
import { SupervisorAccount } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  offset: theme.mixins.toolbar
}));
const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            HOME
          </Typography>
          <IconButton component={Link} to="/admin" color="inherit">
            <SupervisorAccount/>
          </IconButton>
          <IconButton component={Link} to="/dashboard" color="inherit">
            <HomeRoundedIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}/>
    </div>
  );
}

export default Nav;