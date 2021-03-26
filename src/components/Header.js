import React from "react";
import { connect } from "react-redux";
const Header = (props) => {
  //console.log("props from Header", props);
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};
const mapStateToProps = (state) => {
  //console.log("state from mapStateToProps in Header", state);
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price,
  };
};

export default connect(mapStateToProps, {})(Header);
