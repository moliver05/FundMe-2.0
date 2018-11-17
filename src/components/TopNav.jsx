// eslint-disable-next-line no-unused-vars
import React from 'react';


function TopNav(){
  var styles = {
    fontSize: '25px', 
    justifyContent: 'space-between',
    border: '10px solid gold',
    opacity: '.5',
    paddingBottom: '15px',
    backgroundColor: 'indigo',
    width: '700px',
    marginLeft: '350px'

  };
  var headStyles = {
    textAlign: 'center',
    color: 'white'
  };
  return (
    <div style={styles}>
      <div style={headStyles}>
          $$ BOOZEEE $$
      </div>
    </div>
  
  );
}
  
export default TopNav;