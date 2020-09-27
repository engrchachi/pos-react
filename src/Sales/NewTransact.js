import React, {useState, useEffect} from 'react'
import AddProducts from './AddProducts';
import TransTable from './TransTable';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import TotalTransact from './TotalTransact';
import TransPrompt from './TransPrompt';
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
    padding: '0 8px',
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
    padding: theme.spacing(2)
  }
}));

const NewTransact = () => {
  const classes = useStyles();
  const [tableData,
    addTableData] = useState([]);
  const [totalPrice,
    getTotalPrice] = useState([]);
  const [tableSum,
    setTable] = useState();
  const [open,
    setOpen] = useState(false);
  //   useEffect(() => {   if(tableData){   console.log(tableData); }   },
  // [tableData]);   useEffect(()=> { console.log(totalPrice);   },[totalPrice])

  useEffect(() => {
    if (tableSum) {
      tableSum.map(doc => (console.log(doc)))
    }

  }, [tableSum])

  return (
    <div>

      <Grid container spacing={5} style={{
        padding: '20px'
      }}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Paper elevation={3} className={classes.Paper}>
            <AddProducts addTableData={addTableData} tableData={tableData.tableData}></AddProducts>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Paper elevation={3} className={classes.Paper}>
            <TotalTransact totalPrice={totalPrice} setOpen={setOpen}></TotalTransact>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Paper elevation={3} className={classes.Paper}>
            <TransTable
              tableData={tableData}
              getTotalPrice={getTotalPrice}
              tableSum={tableSum}
              setTable={setTable}></TransTable>
          </Paper>
        </Grid>
        <TransPrompt open={open} setOpen={setOpen}></TransPrompt>

      </Grid>
    </div>
  )
}
export default NewTransact;