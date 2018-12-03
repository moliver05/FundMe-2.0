import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {

  <style jsx global>{`

  `}
  </style>;

  return (
    <div>
      <div className="container">
        <div className="panel panel-danger">
          <h3 className="panel-title">{props.type}</h3>
        </div>
        <br/>
        <div className="panel body">
          <ul>
            <li>{props.name}</li>
            <li>{props.price}</li>
            <li>{props.remaining}</li>
          </ul>
          <hr/>
        </div>
      </div>
    </div>
    
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default Beer;