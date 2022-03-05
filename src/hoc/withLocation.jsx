import React from "react";
import { useLocation } from "react-router-dom";

function withLocation(Component) {
  return (props) => {
    const location = useLocation();
    return <Component location={location} {...props} />;
  };
}

export default withLocation;
