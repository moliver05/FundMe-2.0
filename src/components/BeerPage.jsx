// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {

  return (
    <div>
      <div className></div>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <hr/>
          <br/>
          <h3 className="panel-title">{props.type}</h3>
        </div>
        <br/>
        <div className="panel body">
          <ul>
            <li>{props.name}</li>
            <li>{props.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Beer;