import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {

  var design = {
    color: 'skyblue',
    fontWeight: 'bolder',
    opacity: '1',
    width: '100%',
    height: 'auto',
    display: 'block',
    justifyContent: 'space-between',
    margin: '20px'
  };

  var designTwo = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '8px',
  };

  var beerRows = {
    display: 'flex',
    border: '3px dotted yellow',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '110px',
    marginBottom: '14px',
    padding: '10px',
    borderRadius: '35px'
  };

  const adminBeer =
    <div style={beerRows}>
      <div style={design}>
        <p>{props.name}</p>
      </div>
      <div style={design}>
        <p>{props.type}</p>
      </div>
      <div style={design}>
        <p>{props.price}</p>
      </div>
      <div style={design}>
        <p>{props.remaining} left</p>
      </div>
      <div style={designTwo}>
        <button className="btn btn-info" onClick={() => { props.onBeerSelection(props.beerId); }}><h3>Edit</h3></button> <br />
        <button className="btn btn-danger" onClick={() => { props.onBeerDelete(props.beerId); }}><h3>Delete</h3></button>
      </div>
    </div>;

  const menuBeer =
    <div style={beerRows}>
      <div style={design}>
        <p>{props.name}</p>
      </div>
      <div style={design}>
        <p>{props.type}</p>
      </div>
      <div style={design}>
        <p>{props.price}</p>
      </div>
      <div style={design}>
        <p>{props.remaining} Left</p>
      </div>
      <div style={designTwo}>
        <button className="btn btn-primary" onClick={() => {
          props.onBeerReduce(props.beerId);
        }}><h3>Order</h3></button>
      </div>
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', width: '73%' }}>
        {adminBeer}
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', width: '73%' }}>
        {menuBeer}
      </div>
    );
  }
}
Beer.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  remaining: PropTypes.number,
  currentRouterPath: PropTypes.string.isRequired,
  beerId: PropTypes.string,
  onBeerSelection: PropTypes.func.isRequired,
  onBeerDelete: PropTypes.func.isRequired,
  onBeerReduce: PropTypes.func.isRequired
};

export default Beer;