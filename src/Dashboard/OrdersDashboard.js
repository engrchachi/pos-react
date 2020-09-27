import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
const createData = (id, date, name, shipTo, paymentMethod, amount) => {
  return {
    id,
    date,
    name, 
    amount
  };
}

const rows = [
  createData(0, '16 Mar, 2020', 'Okinawa Milk Tea', '312.44'),
  createData(1, '16 Mar, 2020', 'Taro Milk Tea', 866.99),
  createData(2, '16 Mar, 2020', 'Chocolate Milk Tea', 100.81),
  createData(3, '16 Mar, 2020', 'Red Velvel Milk Tea', 654.39),
  createData(4, '15 Mar, 2020', 'Okinawa Milk Tea', 212.79)
];

const preventDefault = (event) => {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

const OrderDashboard = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Order</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
export default OrderDashboard;