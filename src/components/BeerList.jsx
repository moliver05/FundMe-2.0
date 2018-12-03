import PropTypes from 'prop-types';
import React from 'react';
import Beer from './BeerPage';


function BeerList(props){
  return (
    <div>
      {props.beerStock.map((beers, index) =>
        <Beer
          name={beers.name}
          type={beers.type}
          price={beers.price}
          remaining={beers.remaining}
          key={index}/>
      )}
    </div>
  );
}

BeerList.propTypes = {
  beerStock: PropTypes.array
};

export default BeerList;

