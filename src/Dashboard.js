import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import OrdersDashboard from './Dashboard/OrdersDashboard'
import TransDashboard from './Dashboard/TransDashboard'
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    ...theme.mixins.toolbar
  },
  pos: {
    marginBottom: 12
  },
  control: {
    padding: 7
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  Paper: {
    padding: theme.spacing(5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column', 
  }
}));
const Dashboard = () => {
  const classes = useStyles(); 
  const fixedHeightPaper = clsx(classes.Paper, classes.fixedHeight);
  return (
    <div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Grid container spacing={5} style={{
          padding: '20px'
        }}>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Paper className={fixedHeightPaper}>
              <TransDashboard/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Paper className={fixedHeightPaper}></Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Paper className={fixedHeightPaper}>
              <OrdersDashboard/>
            </Paper>
          </Grid>

        </Grid>
      </main>
    </div>
  )
}
export default Dashboard;