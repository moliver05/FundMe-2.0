import React from 'react';
import NewBeer from './NewBeer';
import BeerList from  './BeerList';
import PropTypes from 'prop-types';
import EditBeer from './EditBeer';


function Admin(props) {
  var adminStyle = {
    display: 'flex',
    flexFlow: 'column nowrap'
  };
  var optionalContent = null;
  if (props.selectedBeer != null) {
    optionalContent = 
    <EditBeer 
    selectedBeer={props.beerList[props.selectedBeer]} onBeerEdit={props.onBeerEdit}/>;
  }
  return(
    <div style={adminStyle}>
      <div style={{display:'flex', 
      width:'100%',
      marginBottom:'40px',
      color: 'white'}}>
        <NewBeer addBeer={props.addBeer}/>
      </div>
      {optionalContent}
      <br/>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}
        onBeerDelete={props.onBeerDelete}
        selectedBeer={props.selectedBeer}
        onBeerEdit={props.onBeerEdit}
        />
    </div>
  );

}

Admin.propTypes = {
  BeerList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  addBeer: PropTypes.func,
  onBeerDelete: PropTypes.func.isRequired,
  onBeerSelection: PropTypes.func.isRequired,
  onBeerEdit: PropTypes.func,
  selectedBeer: PropTypes.string,
};


export default Admin;