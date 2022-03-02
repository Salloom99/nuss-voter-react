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

const PasswordInput = (props) => {
  const handleChange = (event) => {
    // console.log(event.currentTarget.value);
    props.onChange(event);
  };

  return (
    <input
      value={props.value}
      onChange={handleChange}
      className="input full-width control"
      type="password"
      name="password"
      id="password"
      placeholder="كلمة المرور"
    />
  );
};

const Select = ({ options, id, onChange }) => {
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <div className="select full-width control">
      <select
        className="full-width clickable"
        name={id}
        id={id}
        onChange={handleChange}
        defaultValue={0}
      >
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
  state = {
    department: "",
    unit: "",
    password: "",
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Call the server
    this.setState({ password: "" });
    console.log("Submitted with", this.state);
  };

  render() {
    return (
      <div className="form">
        <span className="title">{"انتخابات الهيئة الطلابية"}</span>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <Select
              id={"department"}
              onChange={this.handleChange}
              options={["الفرع", "دمشق", "تشرين", "حلب"]}
            />
            <Select
              id={"unit"}
              onChange={this.handleChange}
              options={[
                "الوحدة",
                "كلية الهندسة المعلوماتية",
                "كلية الحقوق",
                "كلية الهندسة الميكانيكية والكهربائية",
              ]}
            />
            <PasswordInput
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="button control clickable">دخول</button>
          </form>
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
        <LoginForm />
      </>
    );
  }
}

export default LoginCard;
