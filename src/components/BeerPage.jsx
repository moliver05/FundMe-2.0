import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {

  var beerRows = {
    display: 'flex',
    border: '3px solid rgb(19, 36, 115)',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '110px',
    marginBottom: '14px',
    padding: '0px 12px',
  };

  <style global jsx>{`
   .design {
     color: var(--blueblack);
     border: 3px solid var(--blueblack);
     background-color: var(--light-peach);
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
     background-color: var(--light-peach);
     width: 100px;
     height: 60px;
     border: 3px solid black;
     border-radius: 25px;
     font-size: 1em;
   }
   `}
  </style>


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
        <button onClick={() => { props.onBeerSelection(props.kegId); }}>Edit</button>
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
        <button>Pour</button>
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
  remaining: PropTypes.string,
  currentRouterPath: PropTypes.string,
  beerId: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func
};

export default Beer;