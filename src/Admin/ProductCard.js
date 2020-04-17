import React, {useEffect, useState} from 'react' 
import IconButton from '@material-ui/core/IconButton'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import {
  Table,
  TableRow,
  TableHead,
  Paper,
  Card,
  Typography,
  Grid,
  TableBody,
  TableCell
} from '@material-ui/core'
const ProductCard = ({data, editDialogState, setEditDialogState, setProductId}) => {
  const style = {
    padding: '50px',
    textAlign: 'center',
    display: 'inline-block'
  }; 

  return (
    <React.Fragment>
      <Paper style={style}>
        <Table>
          <TableHead>
            <Typography>{data.name}</Typography>
          </TableHead>
        </Table>
        <div>
          <IconButton onClick={() => {setEditDialogState(!editDialogState); setProductId(data._id)}}  color="inherit">
            <HomeRoundedIcon/>
          </IconButton>
        </div>
      </Paper>
    </React.Fragment>
  )
}
export default ProductCard
