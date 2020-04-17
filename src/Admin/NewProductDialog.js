import React, {useState, useEffect} from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Select,
  MenuItem
} from '@material-ui/core';
const NewProductDialog = ({dialogState, setDialogState}) => { 
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState([]);
  const [selectedType, selectType] = useState('');

  const getProductClass = async() => {
    const response = await fetch('http://localhost:3000/product/getProductClasses');
    const data = await response.json();
    setProductType(data);
  }
  const onClickHandler = e =>{
    setProductName(e.target.value);
  }
  const onSelectChange = e => {
    setProductType(e.target.value);
  }
  const addProduct = async() => {
    console.log(selectedType)
    const options = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({name: productName, class: selectedType})
    }
    const response = await fetch('http://localhost:3000/product/addProduct', options)
    .then(data => console.log(data));
  }
  useEffect(() => {
    getProductClass(); 
  }, [])
  
  return (
    <React.Fragment> 
      <Dialog open={dialogState} onClose={()=>setDialogState(!dialogState)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Product</DialogTitle>
        <DialogContent> 
          <Select value={selectedType} onChange={e => selectType(e.target.value)}>
            {
              productType.map(type=> (
              <MenuItem value={type.name}>{type.name}</MenuItem>
              ))
            }
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            type="text"
            fullWidth
            value={productName}
            onChange={onClickHandler}
            />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Cancel
          </Button>
          <Button onClick={()=>addProduct()}color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default NewProductDialog
