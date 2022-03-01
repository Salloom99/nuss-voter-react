import React, { Component } from "react";
import nusslogo from "../../images/nuss_logo.png";

const Logo = () => {
  return (
    <div id="logo">
      <img
        //   srcSet="
        // ../../images/nuss_logo_574w.png 574w,
        // ../../images/nuss_logo_768w.png 768w,
        // ../../images/nuss_logo.png 960w"
        src={nusslogo}
        alt="NUSS logo"
      />
    </div>
  );
};

class PasswordInput extends Component {
  render() {
    return (
      <input
        className="input full-width control"
        type="password"
        name=""
        id="password"
        placeholder="كلمة المرور"
      />
    );
  }
}

const Select = ({ options, id }) => {
  return (
    <div className="select full-width control">
      <select className="full-width" name="" id={id} defaultValue={0}>
        <option value="0" disabled>
          {options[0]}
        </option>
        <option value="1">{options[1]}</option>
        <option value="2">{options[2]}</option>
        <option value="3">{options[3]}</option>
      </select>
    </div>
  );
};

class LoginForm extends Component {
  render() {
      const { title, action, children} = this.props;
    return (
      <div className="form">
        <span className="title">{title}</span>
        <div className="form-group">
          <form action={action}>{children}</form>
        </div>
      </div>
    );
  }
}

class LoginCard extends Component {
  render() {
    return (
      <>
        <Logo />
        <LoginForm title={"انتخابات الهيئة الطلابية"} action={"/dashboard.html"}>
          <Select
            id={"department"}
            options={["الفرع", "دمشق", "تشرين", "حلب"]}
          />
          <Select
            id={"unit"}
            options={[
              "الوحدة",
              "كلية الهندسة المعلوماتية",
              "كلية الحقوق",
              "كلية الهندسة الميكانيكية والكهربائية",
            ]}
          />
          <PasswordInput />
          <button className="button control">دخول</button>
        </LoginForm>
      </>
    );
  }
}

export default LoginCard;
