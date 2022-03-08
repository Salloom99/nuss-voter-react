import React from "react";
import withNavigate from "../../hoc/withNavigate";
import withUnitContext from "../../hoc/withUnitContext";
import { Logo } from "../../components/common/logo";
import { LoginForm as Form } from "./LoginForm";
import FullContainer from "./../../layouts/containers/fullContainer";
import SmallCard from "./../../layouts/cards/smallCard";


function Login() {
  
  const LoginForm = withUnitContext(withNavigate(Form));
  return (
    <FullContainer>
      <SmallCard>
        <Logo />
        <LoginForm />
      </SmallCard>
    </FullContainer>
  );
}

export default Login;
