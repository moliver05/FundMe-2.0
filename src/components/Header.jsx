/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return (
    <div>
      <style jsx>
        {`
         .topnav a {
            float: left;
            color: lavenderblush;
            text-align: center;
            padding: 10px 10px;
            text-decoration: none;
            font-size: 15px;
            width: 15%;
          }
          
          .topnav a:hover {
            background-color: white;
            color: black;
          }
          
          .topnav a.active {
            background-color: thistle;
            color: white;
          }

          li  {
            margin-bottom: 10px;
            margin-top: 10px; 
            display: inline-block;
        }
        `}
      </style>
      <div class="topnav">
        <Link to="/" >Home</Link>
        <Link to="/beers">Our Beers</Link> 
      </div>
    </div>
  );
}