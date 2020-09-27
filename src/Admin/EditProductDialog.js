import React, {useState, useEffect} from 'react';
import EditTable from './EditTable';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';

const EditProductDialog = ({editDialogState, setEditDialogState, productId}) => {
  console.log("product id:" + productId)
  const [productInfo,
    setProductInfo] = useState([]);
  const [selectedOption,
    selectOption] = useState([]); 
  const [productName,
    setProductName] = useState('');
  const getProductInfo = async() => {
    const PRODUCT_ID = productId;
    const response = await fetch(`http://localhost:3000/product/getProduct/${PRODUCT_ID}`);
    const data = await response.json();
    setProductInfo(data[0]);
    setProductName(data[0].name);
  }
  const getProductData = async(QUERY_TYPE) => {
    const PRODUCT_ID = productId;
    const response = await fetch(`http://localhost:3000/product/getProduct${QUERY_TYPE}s/${PRODUCT_ID}`)
    return await response.json();
  }
  const [newInfo,
    getNewInfo] = useState([]);
 
useEffect(() => {
    if (selectedOption) {  
      getNewInfo([]);
(async() => {
  console.log("selected: "+ selectedOption)
  let doc = await getProductData(selectedOption) 
  console.log(doc)
  getNewInfo(doc);
  console.log(doc)  
})();

    } 
  }, [selectedOption]); 
 
  useEffect(() => {
    if (productId>=0) {
      getProductInfo();
      console.log("nice")
    }
    return() => {
      getNewInfo([]);
      selectOption('');
      console.log("reset dialog");
    }
 
  }, [editDialogState]);


  const selectChangeHandler = e => {
    selectOption(e.target.value)
  }
 

  const productNameChangeHandler = e =>{
    setProductName(e.target.value);
  } 
  return (
    <React.Fragment>
      <Dialog
        open={editDialogState}
        onClose={() => setEditDialogState(!editDialogState)}
        aria-labelledby="form-dialog-title">
          {productInfo ? <DialogTitle id="form-dialog-title"><TextField onChange={productNameChangeHandler} value={productName} /></DialogTitle> : null }
 
        <DialogContent>
          <Select value={selectedOption} onChange={e => selectChangeHandler(e)}>
            <MenuItem value="Flavor">Flavors</MenuItem>
            <MenuItem value="Sinker">Sinkers</MenuItem>
            <MenuItem value="Size">Sizes</MenuItem>
            <MenuItem value="Item">Items</MenuItem>
          </Select>
          <EditTable selectedOption={selectedOption} productId={productId} newInfo={newInfo} getNewInfo={getNewInfo}/>
   
        </DialogContent> 
      </Dialog>
    </React.Fragment>
  )
}

export default EditProductDialog
