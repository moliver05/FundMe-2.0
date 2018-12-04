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
      <Link to="/" className="btn btn-danger">Our Beers</Link>
      <Link to="/admin" className="btn btn-success">Admin</Link>

    </div>
  );
}
export default Header;