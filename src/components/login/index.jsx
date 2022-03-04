import React, { Component } from "react";
import axios from "axios";
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

const PasswordInput = ({ value, onChange}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="input full-width control"
      type="password"
      name="password"
      id="password"
      placeholder="كلمة المرور"
    />
  );
};

const Select = ({ pk, options, id, label, ...rest }) => {
  // value, onChange as rest
  return (
    <div className="select full-width control">
      <select className="full-width clickable" name={id} id={id} {...rest}>
        <option value="0" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option[pk]} value={option[pk]}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      departments: [],
      units: [],
      account: {
        department: "0",
        unit: "0",
        password: "",
      },
      errors: {},
    };
  }

  async componentDidMount() {
    const { data: departments } = await axios.get(
      "http://localhost:8000/departments/"
    );
    this.setState({ departments });
  }

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.unit === "0") errors.unit = "Unit is required.";

    if (account.password === "") errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? {} : errors;
  };

  handleDepartmentChange = async ({ currentTarget: input }) => {
    const { value } = input;
    const account = { ...this.state.account };
    account.department = value;
    account.unit = "0";
    const { data: units } = await axios.get("http://localhost:8000/units/", {
      params: { department: value },
    });

    this.setState({ units, account });
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const account = { ...this.state.account };
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
    }

    // Call the server
    const account = { ...this.state.account };
    console.log("Submitted with", account);

    // Reset password
    account.password = "";
    this.setState({ account });
  };

  render() {
    const { account, departments, units } = this.state;
    return (
      <div className="form">
        <span className="title">{"انتخابات الهيئة الطلابية"}</span>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <Select
              id={"department"}
              label={"الفرع"}
              onChange={this.handleDepartmentChange}
              options={departments}
              value={account.department}
              pk={"nickname"}
            />
            <Select
              id={"unit"}
              label={"الوحدة"}
              onChange={this.handleChange}
              options={units}
              value={account.unit}
              pk={"nickname"}
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


function Login() {
  return (
    <div className="container-full-height container-flex">
      <section className="card card--small">
        <LoginCard />
      </section>
    </div>
  );
}

export default Login;
