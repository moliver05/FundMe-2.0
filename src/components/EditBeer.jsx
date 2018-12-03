import React from 'react';
import PropTypes from 'prop-types';

function EditBeer(props) {

  let _name = null;
  let _price = null;
  let _type = null;
  let _remaining = null;

  function handleEditBeer(event) {
    event.preventDefault();
    props.startEdit({name: _name.value,
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
        //   placeholder={props.selectedBeer.name}
          ref={(input) => {_name = input;}} />
        <br />
        <hr />

      <label>Type</label>
        <input
          type='text'
          id='type'
        //   placeholder={props.selectedBeer.type} 
          ref={(input) => {_type = input;}} />
        <br />
        <hr />

        <label>Price</label>
        <input
          type='text'
          id='price'
        //   placeholder={props.selectedBeer.price}
          ref={(input) => {_price = input;}} />
        <br />
        <hr />

        <label>Remaining</label>
        <input
          type='text'
          id='remaining'
        //   placeholder={props.selectedBeer.remaining}
          ref={(input) => {_remaining = input;}}  />
        <br />
        <hr />
        <button className="btn btn-success" type='submit'>Done</button>
      </form>
    </div>
  );
}
EditBeer.propTypes = {
  selectedBeer: PropTypes.object,
  startEdit: PropTypes.func,
};

export default EditBeer;