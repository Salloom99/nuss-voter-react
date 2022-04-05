import React from "react";

function FullContainer(props) {
  return (
    <div className="container-full-height flex-center">{props.children}</div>
  );
}

export default FullContainer;
