/* eslint-disable no-unused-vars */
import React from 'react';
import Beer from './BeerPage';

const masterBeerStock = [
  {
    name: 'Heineken',
    type: 'Pale Lager',
    price: '5.50',
  },
  {
    name: 'Guiness',
    type: 'Draught',
    price: '6.00'
  },
  {
    name: 'Fruli Strawberry Beer',
    type: 'Fruit',
    price: '4.00'
  },
  {
    name: 'Double Drooling Dog',
    type: 'I.P.A',
    price: '4.00'
  },
  {
    name: 'Corona Light',
    type: 'Light',
    price: '4.00'
  },
  {
    name: 'Moison XXX',
    type: 'Strong',
    price: '8.00'
  },
  {
    name: 'Hoegaarden',
    type: 'Wheat',
    price: '6.00'
  }
];

export function BeerList(){
  return (
    <div>
      {masterBeerStock.map((beers, index) =>
        <Beer
          name={beers.name}
          type={beers.type}
          price={beers.price}
          key={index}/>
      )}
    </div>
  );
}

export default BeerList;

