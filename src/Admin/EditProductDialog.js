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
 
const EditProductDialog = ({editDialogState, setEditDialogState, productId}) => {
  const [productInfo,
    setProductInfo] = useState({}); 
  const [selectedOption, selectOption] = useState('');
  const getProductInfo = async() => {
    const PRODUCT_ID = productId; 
    const response = await fetch(`http://localhost:3000/product/getProduct/${PRODUCT_ID}`);
    const data = await response.json();
    setProductInfo(data);
    console.log(data);
  }
  useEffect(() => {
    if (productId) {
      getProductInfo();
    } 
    return () => {
        setProductInfo({})
    }
  }, [editDialogState]); 
//!todo: add by key editor
//   useEffect(() => {
//       selectedOption ? 
//       return () => {
//           selectedOption('');
//       }
//   }, [selectedOption])
 
  return (
    <React.Fragment>
      <Dialog
        open={editDialogState}
        onClose={() => setEditDialogState(!editDialogState)}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Product</DialogTitle>
        <DialogContent>
          <Select value={selectedOption} onChange={e => selectOption(e.target.value)}>
            {productInfo
              ?  
                  Object.keys(productInfo).map(key => (
                    (key != '_id' && key != '__v' && key != 'class'  ) ? <MenuItem value={key}>{key}</MenuItem> : null
                  ))  
              : null
}
          </Select>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            type="text"
            fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default EditProductDialog
