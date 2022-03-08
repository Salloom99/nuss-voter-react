import React, { useContext } from "react";
import NomineeContext from './../context/nomineeContext';

function withNomineeContext(Component) {
  return (props) => {
    const context = useContext(NomineeContext);
    return <Component context={context} {...props} />;
  };
}

export default withNomineeContext;
