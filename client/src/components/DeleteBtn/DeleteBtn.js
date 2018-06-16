import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  // <span className="delete-btn" {...props}>
  //   ✗
  // </span>
  <button className="delete-btn btn btn-danger btn-sm" {...props}>Remove</button>
);

export default DeleteBtn;
