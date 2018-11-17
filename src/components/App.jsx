/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import BeerList from './BeerList';
import Beer from './BeerPage';
import TopNav from './Topnav';
import NewBeer from './NewBeer';
import { Switch, Route } from 'react-router-dom';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
var image = require('../img/wallpaper.jpeg');

//import PropTypes from "prop-types";

function App(){
  var styles = {
    backgroundColor: 'black'
  };
  var bodyStyle = {
    border: '5px solid gold',
    padding: '50px',
    height: '100%',
    backgroundImage: 'url('+image+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'orange',
    marginTop: '50px',
  };
  return (
    <div style={styles}>
      <TopNav />
      <Header />
      <div style={bodyStyle}>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/newbeer' component={NewBeer} />
        </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
