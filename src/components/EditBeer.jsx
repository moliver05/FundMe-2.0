import React from 'react';
import PropTypes from 'prop-types';

function EditBeer(props) {

  let _name = null;
  let _price = null;
  let _type = null;
  let _remaining = null;

  function handleEditBeer(event) {
    event.preventDefault();
    props.editBeer({name: _name.value,
                      type: _type.value,
                      price: _price.value,
                      remaining: _remaining.value});
    _name.value='';
    _type.value='';
    _price.value='';
    _remaining.value='';
  };

  return (
    <div>
       <form onSubmit={handleEditBeer}>
       <h2>Edit</h2>
        <label>Name</label><input
          type='text'
          id='name'
          placeholder={props.currentBeer.name}
          ref={(input) => {_name = input;}} />
        <br />
        <hr />

      <label>Type</label>
        <input
          type='text'
          id='type'
          placeholder={props.currentBeer.type} 
          ref={(input) => {_type = input;}} />
        <br />
        <hr />

        <label>Price</label>
        <input
          type='text'
          id='price'
          placeholder={props.currentBeer.price}
          ref={(input) => {_price = input;}} />
        <br />
        <hr />

        <label>Remaining</label>
        <input
          type='text'
          id='remaining'
          placeholder={props.currentBeer.remaining}
          ref={(input) => {_remaining = input;}}  />
        <br />
        <hr />
        <button type='submit'>Done</button>
      </form>
    </div>
  );
}
EditBeer.propTypes = {
  currentBeer: PropTypes.object,
  editBeer: PropTypes.func,
};

export default EditBeer;