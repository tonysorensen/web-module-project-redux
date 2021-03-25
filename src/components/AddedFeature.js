import React from 'react';
import { connect } from "react-redux";
const AddedFeature = props => {
  console.log('props from AddedFeature', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>{}}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>{
  return{
     car: state.car,
  }
}

export default connect (mapStateToProps,{}) (AddedFeature);
