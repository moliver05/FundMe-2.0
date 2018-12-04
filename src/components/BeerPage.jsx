import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {

<style global jsx>{`
   .design {
     color: blue ;
     border: 3px solid gold;
     background-color: red;
     width: 170px;
     height: 75px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-right: 8px;
   }
   .designTwo {
     width: 170px;
     height: 75px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-right: 8px;
   }

   button{
     background-color: red;
     width: 100px;
     height: 60px;
     border: 3px solid black;
     border-radius: 25px;
     font-size: 1em;
   }
   `}
    </style>

  var beerRows = {
    display: 'flex',
    border: '3px solid rgb(19, 36, 115)',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '110px',
    marginBottom: '14px',
    padding: '10px',
  };

  const adminBeer =
    <div style={beerRows}>
      <div className="design">
        <p>{props.name}</p>
      </div>
      <div className="design">
        <p>{props.type}</p>
      </div>
      <div className="design">
        <p>{props.price}</p>
      </div>
      <div className="design">
        <p>{props.remaining} left</p>
      </div>
      <div className="designTwo">
        <button className="btn btn-info" onClick={() => { props.onBeerSelection(props.beerId); }}>Edit</button> <br/>
        <button className="btn btn-danger" onClick={()=> {props.onBeerDelete(props.beerId)}}>Delete</button>
      </div>
    </div>;

  const menuBeer =
    <div style={beerRows}>
      <div className="design">
        <p>{props.name}</p>
      </div>
      <div className="design">
        <p>{props.type}</p>
      </div>
      <div className="design">
        <p>{props.price}</p>
      </div>
      <div className="design">
        <p>{props.remaining} Left</p>
      </div>
      <div className="designTwo">
        <button className="btn btn-primary" onClick={()=> {props.onBeerReduce(props.beerId)}}>Order</button>
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number,
  currentRouterPath: PropTypes.string,
  beerId: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func,
  onBeerDelete: PropTypes.func,
  onBeerReduce: PropTypes.func
};

export default Beer;