import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import IconButton from '@material-ui/core/IconButton';
import { useEffect, useState , useRef} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import nextId from "react-id-generator"
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(5),
        minWidth: 120
    },
    margincircleicon: {
        margin: theme.spacing(5),
      },
})); 


const NewTransact = ({tableData,addTableData}) => {
    const classes = useStyles();
    const initialValue = 0;
    const initialString = '';
    const initialSize = ({size: ''});
    const [selectedProductName, selectProduct] = useState('');
    const [selectedFlavorName, selectFlavor] = useState('');
    const [selectedFlavorQty, selectFlavorQty] = useState(0);
    const [selectedSinkerName, selectSinker] = useState('');
    const [selectedSinkerQty, selectSinkerQty] = useState(0);
    const [selectedSize, selectSize] = useState('ss');
    const [selectedPrice, selectPrice] = useState(initialValue);
    const [products, setProducts] = useState([]);
    const [productId, getProductId] = useState('');
    const [productInfo, setProductInfo] = useState('');  
    const [secondaryDropdownDisabled, setsecondaryDropdownDisabled] = useState(true);
    const [tableData2, setTableData] = useState([]);
    const priceRef = useRef();
    const htmlId = nextId();
    useEffect(() => {
        getProducts(); 
    }, []);  
    useEffect(() => {
        if(selectedProductName){
        console.log('Product changed!'); 
        setsecondaryDropdownDisabled(!selectedProductName);
        getProductInfo(productId).then(() => {
            setsecondaryDropdownDisabled(false);
        });
       
        }
        else{ 
            setProductInfo('');
            selectFlavor('');
            selectSinker('');
            selectSize('');
            selectPrice('');
            setsecondaryDropdownDisabled(true);
        }
    }, [selectedProductName]);

    const getProducts = async () => {
        const response = await fetch('http://localhost:3000/product/getProducts');
        const data = await response.json(); 
        await setProducts(data);
        await console.log(data);
    };
    const getAllData = async () => {
     
        await addTableData({
            id: htmlId,
            pname: selectedProductName,
            flavor: {
                name: selectedFlavorName,
                qty: selectedFlavorQty
            },
            sinker:{
                name: selectedSinkerName,
                qty: selectedSinkerQty
            },
            size: selectedSize,
            price: selectedPrice, 
        })  
        selectProduct('');
    }


    const productChange = (e, type) => {
        selectProduct(e.target.value);
        getProductId(type.key); 
    };
    
    const flavorChange = (e) => {
        selectFlavor(e.target.value.name);
        selectFlavorQty(e.target.value.qty);
    };
    const sinkerChange = (e) => {
        selectSinker(e.target.value.name);
        selectSinkerQty(e.target.value.qty);
    };
    const sizeChange =  (e) => {
         selectSize(e.target.value.size); 
         selectPrice(e.target.value.price); 
        
        console.log(e.target.value);
        console.log(selectedSize);
       
    };
    
    const getProductInfo = async (key) => {
        console.log(key)
        const response = await fetch('http://localhost:3000/product/getProductInfo/' + key);
        const data = await response.json();
        console.log('fetching product info');
         
        console.log(data);
        setProductInfo(data);
    }

    return (
        <React.StrictMode>
            <React.Fragment>

                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="grouped-select">Product Type</InputLabel>
                    <Select 
                        defaultValue=""
                        id="grouped-select"
                        value={selectedProductName}
                        onChange={productChange}> 
                        <ListSubheader>Drink</ListSubheader>
                        {products.map((product) => (
                            <MenuItem value={product.product_name} key={product.idproducts}>{product.product_name}</MenuItem>
                        ))}
                        <ListSubheader>Snack</ListSubheader> 
                    </Select>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="label4">Flavor</InputLabel>
                    <Select
                        disabled={secondaryDropdownDisabled} 
                        onChange={flavorChange}>
                        {
                            productInfo ? productInfo.flavors.map(flavor => (
                                <MenuItem value={flavor}>{flavor.flavor_name}</MenuItem>
                            )) : <MenuItem>null</MenuItem>
                        }
                    </Select>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="label5">Sinker</InputLabel>
                    <Select
                        displayEmpty={true}
                        defaultValue={initialString} 
                        disabled={secondaryDropdownDisabled} 
                        onChange={sinkerChange}>
                        {
                            productInfo ? productInfo.sinkers.map(sinker => (
                                <MenuItem value={sinker}>{sinker.sinker_name}</MenuItem>
                            )) : <MenuItem>null</MenuItem>
                        }
                    </Select>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="label6">Size</InputLabel>
                    <Select 
                        displayEmpty={true}
                        defaultValue={initialString}  
                        disabled={secondaryDropdownDisabled} 
                        onChange={sizeChange}>
                        {      
                            productInfo ? productInfo.sizes.map(size => ( 
                                <MenuItem value={size}>{size.name}</MenuItem>
                            )) : <MenuItem>null</MenuItem>
                        } 
                    </Select>
                </FormControl>
                <FormControl className={classes.margincircleicon}>
                    <IconButton aria-label="delete" onClick={getAllData} >
                    <AddShoppingCartIcon fontSize="large" />
                    </IconButton>
                </FormControl> 
            </React.Fragment>
        </React.StrictMode>
    )
};

export default NewTransact;