import React from "react";
import UserContext from "./userContext";

function ComponentE() {
  return (
    <UserContext.Consumer>
      {username => {
        return <div>Hello {username}</div>;
      }}
    </UserContext.Consumer>
  );
}

export default ComponentE;