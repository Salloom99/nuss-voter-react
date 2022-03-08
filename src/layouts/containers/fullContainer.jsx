import React from "react";

function FullContainer(props) {
  return (
    <div className="container-full-height container-flex">{props.children}</div>
  );
}

export default FullContainer;
