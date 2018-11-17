/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  var routeGuide = {
    margin: '20px',
    color: 'gold'
  };

  return (
    <div style={routeGuide}>
      <h3>Guide</h3>
      <Link to="/" className="btn btn-danger">Home</Link>
      <Link to="/newbeer" className="btn btn-success">Add New Beer</Link> 

    </div>
  );
}

export default Header;