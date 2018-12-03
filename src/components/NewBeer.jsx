import PropTypes from 'prop-types';
import React from 'react';
;

function NewBeer(props) {

  let _name = null;
  let _price = null;
  let _remaining = null;

  function handleNewBeer(event) {
    event.preventDefault();
    props.createBeer({name: _name.value,
                      type: _type.value,
                      price: _price.value,
                      remaining: _remaining.value});
    name.value='';
    type.value='';
    price.value='';
    remaining.value='';
  }

  return (
    <div>
       <form onSubmit={handleNewBeer}>
        <label>Name</label><input
          type='text'
          placeholder='product name'
          ref={(input) => {_name = input;}} />
        <br />
        <hr />

      <label>Type</label>
        <input
          type='text'
          placeholder='$$' 
          ref={(input) => {_type = input;}} />
        <br />
        <hr />

        <label>Price</label>
        <input
          type='number'
          placeholder='$$' 
          ref={(input) => {_price = input;}} />
        <br />
        <hr />

        <label>Remaining</label>
        <input
          type='text'
          placeholder='Stocks'
          ref={(input) => {_remaining = input;}}  />
        <br />
        <hr />
        <button className="btn btn-success" type='submit'>ADD!</button>
      </form>
    </div>
  );
}
AddBeer.propTypes = {
  createBeer: PropTypes.func,
};

export default NewBeer;