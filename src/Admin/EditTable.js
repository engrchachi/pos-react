import React, {useEffect, useState, } from 'react'
import { forwardRef } from 'react'; 
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {Table, TableBody, TableCell, TableRow} from '@material-ui/core'
import MaterialTable from 'material-table'; 
const EditTable = ({newInfo, getNewInfo, selectedOption, productId}) => {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };

      

   const [count, setCount] = useState(0);
   const columns =( [ 
    { title: 'Name', field: 'name' }
  ]) 
   const addData = async(newData, oldData) => { 
    const options = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newData)
    }
     await fetch(`http://localhost:3000/product/add${selectedOption}/${productId}`, options);
     getNewInfo((prevState) => {
      const data = [...prevState];
      data.push(newData);
      return data;
    });
   }
   const updateData = async(newData, oldData) => { 
    const options = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newData)
    }
    console.log(newData)
     await fetch(`http://localhost:3000/product/update${selectedOption}`, options);
     getNewInfo((prevState) => {
      const data = [...prevState];
      data[data.indexOf(oldData)] = newData;
      return data;
    });

   }
  return (
    <React.Fragment>
    <MaterialTable
    title="Edit" 
    icons={tableIcons}
    columns={columns}
    data={newInfo}
    editable={{
      onRowAdd: (newData) => addData(newData),
      onRowUpdate: (newData, oldData) => updateData(newData, oldData),  
      onRowDelete: (oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
             
          }, 600);
        }),
    }}
  />
    </React.Fragment>

  )
}

export default EditTable
