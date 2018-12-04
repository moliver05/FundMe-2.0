import React from 'react';
import BeerList from './BeerList';
import TopNav from './Topnav';
import Header from './Header';
import Error404 from './Error404';
import Admin from './Admin';
// import HappyHour from './HappyHour';
import { Switch, Route } from 'react-router-dom';
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
  color: 'black',
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
    masterBeerStock: {
      'beer-1': {
      name: 'Heineken',
      type: 'Pale Lager',
      price: '5.50',
      remaining: '20'
    },
    'beer-2': {
      name: 'Guiness',
      type: 'Draught',
      price: '6.00',
      remaining: '20'
    },
    'beer-3': {
      name: 'Fruli Strawberry Beer',
      type: 'Fruit',
      price: '4.00',
      remaining: '20'
    },
    'beer-4': {
      name: 'Double Drooling Dog',
      type: 'I.P.A',
      price: '4.00',
      remaining: '20'
    },
    'beer-4': {
      name: 'Corona Light',
      type: 'Light',
      price: '4.00',
      remaining: '20'
    },
    'beer-5': {
      name: 'Moison XXX',
      type: 'Strong',
      price: '8.00',
      remaining: '20'
    },
    'beer-6': {
      name: 'Hoegaarden',
      type: 'Wheat',
      price: '6.00',
      remaining: '20'
    }
  },
  selectedBeer: null
  };

  this.handleAddNewBeer = this.handleAddNewBeer.bind(this);
  this.handleBeerSelection = this.handleBeerSelection.bind(this);
  // this.HappyHourSchedule = this.HappyHourSchedule.bind(this);
  this.handleEditBeer = this.handleEditBeer.bind(this);
};

handleAddNewBeer(newBeer){
  var newMasterBeerStock = this.state.masterBeerStock.slice();
  newMasterBeerStock.push(newBeer);
  this.setState({masterBeerStock: newMasterBeerStock});
};

handleEditBeer(beer){
  let newMasterBeerStock = Object.assign({}, this.state.masterBeerStock, {
    [this.state.selectedBeer]: beer });
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
        <Route exact path='/'render={()=><BeerList beerList={this.state.masterBeerStock} />} />
        <Route exact path='/admin' render={(props)=><Admin
        beerList={this.state.masterBeerStock}
              currentRouterPath={props.location.pathname}
              addBeer={this.handleAddNewBeer}
              onBeerSelection={this.handleBeerSelection}
              selectedKeg={this.state.selectedbeer}
              onEditBeer={this.handleEditBeer}/>} />
          }/> 
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
  }   
}

export default App;