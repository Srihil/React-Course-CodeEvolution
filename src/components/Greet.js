import React, { Children } from "react";

const Greet = (props) => {
  return (
    <>
      <h1>Hello {props.name}</h1>
      {props.Children}
    </>
  )
}
export default Greet