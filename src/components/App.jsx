import React from 'react';
import BeerList from './BeerList';
import Beer from './BeerPage';
import TopNav from './Topnav';
import NewBeer from './NewBeer';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
var image = require('../img/wallpaper.jpeg');


var styles = {
  backgroundColor: 'black'
};
var bodyStyle = {
  border: '5px dotted gold',
  padding: '50px',
  height: '100%',
  backgroundImage: 'url('+image+')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'teal',
  marginTop: '50px',
  marginRight: '25px',
  marginLeft: '25px',
  fontFamily: 'Palatino',
  fontStyle: 'bold',
  fontSize: '30px'
};

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    masterBeerStock: []
  };
  this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
  this.HappyHourSchedule = this.HappyHourSchedule.bind(this);
};

handleAddNewBeer(newBeer){
  var newMasterBeerStock = this.state.masterBeerStock.slice();
  newMasterBeerStock.push(newBeer);
  this.setState({masterKegList: newMasterBeerStock});
};

HappyHourSchedule () {
  this.beers.price -= 3;
}

render(){
  return (
    <div style={styles}>
      <TopNav />
      <Header />
      <div style={bodyStyle}>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/newBeer' render= {() => <NewBeer createBeer ={this.handleAddNewBeer}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
  }
}

export default App;