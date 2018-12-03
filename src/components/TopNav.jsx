// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-undef
var image = require('../img/header.jpg');

function TopNav(){
  var styles = {
    backgroundImage: 'url('+image+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '800px',
    width: '100%',
    
  };
  var headStyles = {
    right: '200px',
    top: '50px',
    position: 'absolute',
    fontSize: '40px',
    fontFamily: 'Georgia',
    fontStyle: 'bold',
    color: 'lime',
    textAlign: 'justify'

  };
  return (
    <div style={styles}>
      <div style={headStyles}>
        <div className="animated infinite bounce delay-2s"> Happy Hour Schedule 
          <br/>
          9 - 12 pm.
        </div>
      </div>
    </div>
  
  );
}
  
export default TopNav;