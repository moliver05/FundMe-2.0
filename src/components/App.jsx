import React from 'react';
import BeerList from './BeerList';
import Beer from './BeerPage';
import TopNav from './Topnav';
import Header from './Header';
import NewBeer from './NewBeer';
import EditBeer from './EditBeer';
import Error404 from './Error404';
// import HappyHour from './HappyHour';
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
  color: 'white',
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
    masterBeerStock: [{
      name: 'Heineken',
      type: 'Pale Lager',
      price: '5.50',
      remaining: '20'
    },
    {
      name: 'Guiness',
      type: 'Draught',
      price: '6.00',
      remaining: '20'
    },
    {
      name: 'Fruli Strawberry Beer',
      type: 'Fruit',
      price: '4.00',
      remaining: '20'
    },
    {
      name: 'Double Drooling Dog',
      type: 'I.P.A',
      price: '4.00',
      remaining: '20'
    },
    {
      name: 'Corona Light',
      type: 'Light',
      price: '4.00',
      remaining: '20'
    },
    {
      name: 'Moison XXX',
      type: 'Strong',
      price: '8.00',
      remaining: '20'
    },
    {
      name: 'Hoegaarden',
      type: 'Wheat',
      price: '6.00',
      remaining: '20'
    }
  ]
  };

  this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
  this.handleBeerSelection = this.handleBeerSelection.bind(this);
  this.HappyHourSchedule = this.HappyHourSchedule.bind(this);
  this.handleEditBeer = this.handleEditBeer.bind(this);
};

handleAddNewBeer(newBeer){
  var newMasterBeerStock = this.state.masterBeerStock.slice();
  newMasterBeerStock.push(newBeer);
  this.setState({masterBeerStock: newMasterBeerStock});
};

handleEditBeer(editBeer, editBeerId){
  let newMasterBeerStock = Object.assign({}, this.state.masterBeerStock, {
    [this.state.selectedBeer]: editBeer });
  this.setState({masterBeerStock: newMasterBeerStock});
}

handleBeerSelection(beerId){
  this.setState({selectedBeer: beerId});
}

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
          <Route exact path='/' render= {() => 
          <BeerList beerStock={this.state.masterBeerStock} /> }/> 
          <Route path='/admin' render={(props) =><Admin
          createBeer={this.handleAddNewBeer}/> 
          startEdit=
          
          
          }/> 
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
  }
}

export default App;