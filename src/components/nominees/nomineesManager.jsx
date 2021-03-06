import React, { Component } from "react";
import { getNomineesIn } from "../../services/nomineeService";
import { Nominee } from "./Nominee";
import withUserContext from "./../../hoc/withUnitContext";
import { NomineeAdder } from "./NomineeAdder";

class NomineesManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominees: [],
      inputName: "",
    };
  }

  async componentDidMount() {
    const { id: unitId } = this.props.context.user;
    const { data: nomineesData } = await getNomineesIn(unitId);
    const nominees = nomineesData.map((nominee) => {
      return { old: true, ...nominee };
    });

    this.setState({ nominees });
  }

  validateName = (name) => {
    const trimmedName = name.trim();

    if (!trimmedName) throw Error("Empty field");

    const { nominees } = this.state;
    const exists = nominees.some((nominee) => nominee.name === trimmedName);
    if (exists) throw Error("Existed name");

    return trimmedName;
  };

  addNominee = (name) => {
    const nominees = [...this.state.nominees];
    nominees.unshift({ name });
    this.setState({ nominees });
  };

  // handleNomineeEdit = (id, name) => {
  //   // var name = event.target.parentElement.querySelector(".name");
  // };

  handleNomineeDelete = (id) => {
    const nominees = this.state.nominees.filter((n) => n.id !== id);
    this.props.onDelete(id);
    this.setState({ nominees });
  };

  handleNewNomineeDelete = (name) => {
    const nominees = this.state.nominees.filter((n) => n.name !== name);
    this.props.onDelete(null, name);
    this.setState({ nominees });
  };

  handleNomineeAdd = () => {
    let name = this.state.inputName;
    try {
      name = this.validateName(name);
      this.addNominee(name);
    } catch (error) {
      // this.context(error.message);
      console.log(error.message);
    }
    this.props.onAdd(name);
    this.setState({ inputName: "" });
  };

  handleInputChange = ({ currentTarget: input }) => {
    this.setState({ inputName: input.value });
  };

  nomineesComponents = (nominees) => {
    return nominees.map((nominee) => {
      const { id, name, old } = nominee;
      const handleDelete = old
        ? () => this.handleNomineeDelete(id)
        : () => this.handleNewNomineeDelete(name);
      return (
        <Nominee
          key={name}
          id={id}
          name={name}
          old={old}
          // onEdit={() => this.handleNomineeEdit(id)}
          onDelete={handleDelete}
        />
      );
    });
  };

  render() {
    const { nominees, inputName } = this.state;

    return (
      <div className="manager flex-col">
        <NomineeAdder
          inputName={inputName}
          onInputChange={this.handleInputChange}
          onAddClick={this.handleNomineeAdd}
        />
        <ul className="manager__list">{this.nomineesComponents(nominees)}</ul>
      </div>
    );
  }
}

export default withUserContext(NomineesManager);
