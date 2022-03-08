import React, { useContext } from "react";
import UserContext from '../context/userContext';

function withUserContext(Component) {
  return (props) => {
    const context = useContext(UserContext);
    return <Component context={context} {...props} />;
  };
}

export default withUserContext;
