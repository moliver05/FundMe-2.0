import React from "react";
import PropTypes from "prop-types";

function Schedule(props) {

  return (
    <div>
      <div className></div>
      <div className="panel panel-default">
        <div className="panel-heading">
        <hr/>
        <br/>
          <h3 className="panel-title">{props.season}</h3>
        </div>
        <br/>
        <div className="panel body">
          <ul>
            <li>{props.place}</li>
            <li>{props.time}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  season: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Schedule;