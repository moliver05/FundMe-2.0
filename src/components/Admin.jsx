import React from 'react';
import NewBeer from './NewBeer';
import BeerList from  './BeerList';
import PropTypes from 'prop-types';
import EditBeer from './EditBeer';


function Admin(props) {
  console.log(props.selectedKeg);

  var adminStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  };
  let optionalContent = null;
  if (props.selectedBeer != null) {
    optionalContent = <EditBeer selectedKeg={props.kegList[props.selectedKeg]} startEdit={props.startEdit}/>;
  }
  return(
    <div style={adminStyle}>
      <div style={{display:'flex',justifyContent:'space-around', width:'100%',marginBottom:'40px'}}>
        <NewBeer addBeer={props.addBeer}/>
        {optionalContent}
      </div>
      <BeerList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection}/>
    </div>
  );

}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onNewKeg: PropTypes.func,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string,
  onEditKeg: PropTypes.func
};


export default Admin;