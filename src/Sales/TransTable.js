import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Title from '../Dashboard/Title';

 
const preventDefault = (event) => {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));
const x = obj => {
  let a = 0
  if(obj){ 
      obj.map(data => (
      a += data.price
    ));
    
  } 
  return a;
}
const TransTable = ({tableData, getTotalPrice, tableSum, setTable}) => {
  const classes = useStyles(); 
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => { 
    if(tableData){
      setTable(oldArray => (tableSum) ?  [...oldArray, tableData] : tableData);
      
    }
    
  },[tableData])
  
  useEffect(() => {
     if(tableSum){  
        getTotalPrice({
          summary: tableSum,
          total: x(tableSum)
        })
    }
  }, [tableSum]);
  const handleRemoveItem = (key) => {  
     setTable(tableSum.filter(item => item.id !== key)); 
   };


  const TableSum = () => {  
    if(tableSum){ 
      return(
        tableSum.map((row, index) => ( 
          <TableRow key={row.id}>  
            <TableCell>{index+1}</TableCell>
            <TableCell>{row.pname}</TableCell>
            <TableCell>{row.flavor.name}</TableCell>
            <TableCell>{row.sinker.name}</TableCell> 
            <TableCell>{row.size}</TableCell> 
            <TableCell>
            <IconButton color="primary" onClick={() => {handleRemoveItem(row.id)}}>
            <DeleteIcon/>
            </IconButton>
            </TableCell>
            <TableCell  color="secondary">{row.price}</TableCell>   
          </TableRow>
        ))
      )
    } else{
      return null;
    }
  }
 
  return (
    <React.Fragment>
      <Title>Summary</Title>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Flavor</TableCell>
            <TableCell>Sinker</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Action</TableCell>
            <TableCell color="secondary">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          <TableSum></TableSum>
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
         
      </div>
    </React.Fragment>
  );
}
export default TransTable;