import PropTypes from 'prop-types';
import React from 'react';
import Beer from './BeerPage';


function BeerList(props) {
  var listStyle = {
    display: 'flex',
    width: '100%',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={listStyle}>
      {Object.keys(props.beerList).map(function (key) {
        var beer = props.beerList[key];
        return <Beer name={beer.name}
          type={beer.type}
          price={beer.price}
          remaining={beer.remaining}
          currentRouterPath={props.currentRouterPath}
          key={key}
          beerId={key}
          onBeerSelection={props.onBeerSelection}
          onBeerDelete={props.onBeerDelete}
          onBeerReduce={props.onBeerReduce}
          onBeerEdit={props.onBeerEdit}
        />;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerStock: PropTypes.object,
  currentRouterPath: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  remaining: PropTypes.number,
  onBeerSelection: PropTypes.func.isRequired,
  onBeerDelete: PropTypes.func.isRequired,
  onBeerEdit: PropTypes.func.isRequired,
};

export default BeerList;

