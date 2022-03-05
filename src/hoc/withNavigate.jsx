import React from "react";
import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };
}

export default withNavigate;
