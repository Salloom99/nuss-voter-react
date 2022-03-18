import React, { Component } from "react";
import { getAllDepartments } from "../../services/departmentService";
import { getUnitsIn } from "../../services/unitService";
import { PasswordInput } from "./../../components/common/passwordInput";
import { Select } from "./../../components/common/select";
import auth from "../../services/authService";
import { notify } from './../../components/common/snackbar';

export class LoginForm extends Component {
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
    const { data: departments } = await getAllDepartments();
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
    const { data: units } = await getUnitsIn(value);

    this.setState({ units, account });
  };

  handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const account = { ...this.state.account };
    account[name] = value;
    this.setState({ account });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Validate submitted values
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length) {
      console.log("Submitted with errors", errors);
      return;
    }

    // Call the server
    const account = { ...this.state.account };
    console.log("Submitted with", account);
    try {
      auth.register(account);
      this.props.context.setUser({ id: account.unit });

      // Go to Dashboard
      this.props.navigate("/", { replace: true });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.password = error.response.data.password;
        this.setState({ errors });

        notify("كلمة المرور غير صحيحة");
      }

      // Reset password
      account.password = "";
      this.setState({ account });
    }
  };

  departmentSelect = (account, departments) => {
    return (
      <Select
        id={"department"}
        label={"الفرع"}
        onChange={this.handleDepartmentChange}
        options={departments}
        value={account.department}
        pk={"nickname"}
      />
    );
  };

  unitSelect = (account, units) => {
    return (
      <Select
        id={"unit"}
        label={"الوحدة"}
        onChange={this.handleChange}
        options={units}
        value={account.unit}
        pk={"nickname"}
      />
    );
  };

  render() {
    const { account, departments, units } = this.state;
    return (
      <div className="form">
        <span className="title">{"انتخابات الهيئة الطلابية"}</span>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            {this.departmentSelect(account, departments)}
            {this.unitSelect(account, units)}
            <PasswordInput
              value={account.password}
              onChange={this.handleChange}
            />
            <button className="button control clickable">دخول</button>
          </form>
        </div>
      </div>
    );
  }
}
