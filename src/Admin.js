import React, {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Title from './Dashboard/Title';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton'
import ProductCard from './Admin/ProductCard';
import Button from '@material-ui/core/Button';
import NewProductDialog from './Admin/NewProductDialog';
import EditProductDialog from './Admin/EditProductDialog';
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
    padding: theme.spacing(3)
  }
}));

const Admin = () => {
  const [products,
    setProducts] = useState([]);
  const [dialogState, setDialogState] = useState(false);
  const [editDialogState, setEditDialogState] = useState(false);
  const [selectedProductaName, selectProductName] = useState('');
  const [productId, setProductId] = useState('');
  const getProducts = async() => {
    const response = await fetch('http://localhost:3000/product/getProducts');
    const data = await response.json();
    setProducts(data);
  }
  const classes = useStyles();
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    console.log(productId)
  },[productId])


  return (
    <div> 
      <div>
      <Grid>
      <Title>Products</Title>
      <IconButton onClick={() => setDialogState(!dialogState)}color="inherit">
        <AddIcon/>
      </IconButton>
      </Grid>
      
      </div> 
      
      <Grid container spacing={2}>   
      <NewProductDialog dialogState={dialogState} setDialogState={setDialogState}/>
      <EditProductDialog editDialogState={editDialogState} setEditDialogState={setEditDialogState} productId={productId}/>
         {
        products ? products.map((data, index) => (
          <Grid item xs={12} md={6} lg={4} xl={4}>
          <ProductCard key={index} data={data} setProductId={setProductId} editDialogState={editDialogState} setEditDialogState={setEditDialogState} />
          </Grid>
        )) : null 
        }
      </Grid>

    </div>
  )
}
export default Admin;