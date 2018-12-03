import PropTypes from 'prop-types';
import React from 'react';


function BeerList(props){
  return (
    <div>
       {Object.keys(props.kegList).map(function(key) {
        var beer = props.kegList[key];
        return <Beers name={beer.name}
        type={beer.type}
        price={beer.price}
        remaining={beer.remaining}
        currentRouterPath={props.currentRouterPath}
        key={key}
        beerId={key}
        onKegSelection={props.onKegSelection}/>;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerStock: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default BeerList;

