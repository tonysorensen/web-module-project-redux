import React from "react";
import { addFeature } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  //console.log("props in additonalFeature", props);
  const handleClick = (e) => {
    e.preventDefault();
    props.addFeature(props.feature);
    // //console.log(props.feature.price);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
