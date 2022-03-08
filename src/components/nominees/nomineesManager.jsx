import React, { Component } from "react";
import {
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nominee } from "./Nominee";

class NomineesManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominees: props.nominees,
      inputName: "",
    };
  }


  validateName = (name) => {
    const trimmedName = name.trim();

    if (!trimmedName)
      throw Error('Empty field');
    
    const { nominees } = this.state;
    const exists = nominees.some(nominee => nominee.name === trimmedName);
    if (exists)
      throw Error('Existed name');

    return trimmedName
  }

  addNominee = (name) => {
    const nominees = [...this.state.nominees];
    nominees.unshift({ name });
    this.setState({ nominees });
  }

  handleNomineeEdit = (id, name) => {
    // var name = event.target.parentElement.querySelector(".name");
  };

  handleNomineeDelete = (id) => {
    const nominees = this.state.nominees.filter((n) => n.id !== id);
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
    this.setState({ inputName: "" });
  };

  handleInputChange = ({ currentTarget: input }) => {
    this.setState({ inputName: input.value });
  };

  handleEnterPress = (event) => {
    if (event.key === 'Enter')
      this.handleNomineeAdd();
  }

  render() {
    const { nominees, inputName } = this.state;

    return (
      <div className="nominees-manager">
        <div className="add-nominee full-width">
          <input
            className="input control"
            type="text"
            placeholder="أدخل اسما لإضافته"
            onChange={this.handleInputChange}
            onKeyPress={ event => this.handleEnterPress(event)}
            value={inputName}
          />
          <FontAwesomeIcon
            icon={faCirclePlus}
            className={"fa-3x clickable"}
            onClick={this.handleNomineeAdd}
          />
        </div>
        <ul className="nominees">
          {nominees.map((nominee) => {
            const { id, name } = nominee;
            return (
              <Nominee
                key={name}
                id={id}
                name={name}
                onEdit={() => this.handleNomineeEdit(id)}
                onDelete={() => this.handleNomineeDelete(id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NomineesManager;
