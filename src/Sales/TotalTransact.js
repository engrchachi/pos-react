import React, {useEffect} from 'react'
import {Typography, IconButton, Grid} from '@material-ui/core';
import {ShoppingCart, SettingsInputComponent} from '@material-ui/icons';

const TotalTransact = ({totalPrice, setOpen}) => {
  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);
  return (
    <React.Fragment>
         <Typography>Total:</Typography>
      <Grid justify="space-between" align="center">
        <Grid>
       
        <Typography>
          <h1>{(totalPrice.total) ? totalPrice.total : '0'}</h1>
        </Typography>
        </Grid>
        <Grid>
        <IconButton onClick={() => setOpen(true)}>
          <ShoppingCart fontSize="large"></ShoppingCart>
        </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default TotalTransact;