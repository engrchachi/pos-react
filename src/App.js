import React from 'react'
import './App.css'
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import NewTransact from './Sales/NewTransact';
import Admin from './Admin';
import {  createMuiTheme,  makeStyles, createStyles, Theme as AugmentedTheme, ThemeProvider} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, AppBar } from '@material-ui/core';
const font = "'Google Sans', sans-serif"; 
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: green,
  },
  fontFamily: font,
  status: {
    danger: 'orange',
  }, 
}); 

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>    
      <Container fluid> 
        <Grid direction="column">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Dashboard}/> 
        <Route path="/dashboard" exact component={Dashboard}/> 
        <Route path="/admin" exact component={Admin}/> 
        <Route path="/sales/newTransact" exact component={NewTransact}/> 
        </Switch> 
        </Grid>  
        </Container> 
      </ThemeProvider>
    </Router>

  )
}


export default App;
