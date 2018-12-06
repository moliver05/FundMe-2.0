import React from 'react';
import PropTypes from 'prop-types';
function EditBeer(props) {

  var styles = {
    color: 'white',
    border: '2px solid orange',
    widith: '100%'
  };

  let _name = null;
  let _price = null;
  let _type = null;
  let _remaining = null;

  function handleEditBeer(event) {
    event.preventDefault();
    props.onBeerEdit({
      name: _name.value,
      type: _type.value,
      price: _price.value,
      remaining: _remaining.value
    });
    _name.value = '';
    _type.value = '';
    _price.value = '';
    _remaining.value = '';
  }

  return (
    <div style={styles}>
      <form onSubmit={handleEditBeer}>
        <h2>Edit</h2>
        <label>Name</label><input
          type='text'
          id='name'
          placeholder='new name'
          ref={(input) => { _name = input; }} />
        <br />
        <hr />

        <label>Type</label>
        <input
          type='text'
          id='type'
          placeholder='new type'
          ref={(input) => { _type = input; }} />
        <br />
        <hr />

        <label>Price</label>
        <input
          type='text'
          id='price'
          placeholder='new price'
          ref={(input) => { _price = input; }} />
        <br />
        <hr />

        <label>Remaining</label>
        <input
          type='text'
          id='remaining'
          placeholder='amount desired'
          ref={(input) => { _remaining = input; }} />
        <br />
        <hr />
        <button type='submit'>Done</button>
      </form>
    </div>
  );
}
EditBeer.propTypes = {
  selectedBeer: PropTypes.object,
  onBeerEdit: PropTypes.func,
};

export default EditBeer;