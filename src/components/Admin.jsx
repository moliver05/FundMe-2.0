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
  let optionalContent = null;
  if (props.selectedBeer != null) {
    optionalContent = <EditBeer selectedBeer={props.beerList[props.selectedBeer]} startEdit={props.startEdit}/>;
  }
  return(
    <div style={adminStyle}>
      <div style={{display:'flex',justifyContent:'space-around', width:'100%',marginBottom:'40px'}}>
        <NewBeer addBeer={props.addBeer}/>
        {optionalContent}
      </div>
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onBeerSelection={props.onBeerSelection}
        onBeerDelete={props.onBeerDelete}
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
  selectedBeer: PropTypes.string,
  startEdit: PropTypes.func
};


export default Admin;