/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import BeerPage from './BeerPage';

function NewBeer() {
  return (
    <div>
      <form>
        <label>Name</label><input
          type='text'
          placeholder='product name' />
        <br />
        <hr />

        <label>Price</label>
        <input
          placeholder='$$' />
        <br />
        <hr />

        <label>Location</label>
        <input
          type='text'
          placeholder='address' />
        <br />
        <hr />

        <label>Kind</label>
        <input
          type='text'
          placeholder='fruits, veggies, etc' />


        <br />
        <button className="btn btn-success" type='submit'>ADD!</button>
      </form>
    </div>
  );
}


export default NewBeer;