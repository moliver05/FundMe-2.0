import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Beerlist from './BeerList';
import BeerPage from './BeerPage';
import { Header } from './Header';
var image = require("../img/wallpaper.jpeg");

function App(){
  var bodyStyle = {
    border: "2px solid orange",
    padding: "50px",
    backgroundImage: "url("+image+")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "orange",
    marginTop: "50px",
  }
  return (
    <div>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <div style={bodyStyle}>
      <Switch>
        <Route exact path='/' component={} />
        <Route exact path='/beers' component={Beerpage} />
        <Route exact path='/' component={} />
      </Switch>
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
