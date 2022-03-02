import React, { Component } from "react";
import nusslogo from "../../images/nuss_logo.png";
import { departments, unitsInDepartment } from "../../services/unitsService";

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

const Select = ({ options, id, label, onChange }) => {
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
          {label}
        </option>
        {options.map( option => <option key={option.id} value={option.id}>{option.name}</option>)}
      </select>
    </div>
  );
};

class LoginForm extends Component {
  constructor(){
    super();

    this.state = {
      account: {
        department: '0',
        unit: '0',
        password: "",
      },
      errors: {}
    };

  }
  

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.unit === '0')
      errors.unit = "Unit is required.";

    if (account.password === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? {} : errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const account = {...this.state.account}
    account[name] = value;
    this.setState({ account });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length) {
      console.log("Submitted with errors", errors);
      return;
    };


    // Call the server
    const account = {...this.state.account}
    console.log("Submitted with", account);


    // Reset password
    account.password = "";
    this.setState({ account });
  };

  render() {
    const { account } = this.state; 
    return (
      <div className="form">
        <span className="title">{"انتخابات الهيئة الطلابية"}</span>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <Select
              id={"department"}
              label={"الفرع"}
              onChange={this.handleChange}
              options={departments}
            />
            <Select
              id={"unit"}
              label={"الوحدة"}
              onChange={this.handleChange}
              options={account.department !== '0' ? unitsInDepartment(account.department): []}
            />
            <PasswordInput
              value={this.state.account.password}
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
