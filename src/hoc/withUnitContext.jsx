import React, { useContext } from "react";
import UnitContext from './../context/unitContext';

function withUnitContext(Component) {
  return (props) => {
    const context = useContext(UnitContext);
    return <Component context={context} {...props} />;
  };
}

export default withUnitContext;
