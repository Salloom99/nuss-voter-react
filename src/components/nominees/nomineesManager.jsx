import React, { Component } from "react";
import {
  faCirclePlus,
  faPenToSquare,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nominee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      name: this.props.name,
    };
    this.nameText = React.createRef();
  }

  handleEdit = () => {
    const { name, editing } = this.state;
    const span = this.nameText.current;
    // this.props.onEdit(this.props.id);
    const newName = editing ? span.innerText : name;
    this.setState({ editing: !editing, name: newName }, () => {
      span.focus();
    });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleNameChange = () => {
    // this.setState({name: this.nameText.current.innerText})
    console.log("changing");
  };

  render() {
    const { name, editing } = this.state;
    return (
      <li className="nominee" ref={this.self}>
        <span
          className="name"
          onInput={this.handleNameChange}
          ref={this.nameText}
          contentEditable={editing}
        >
          {name}
        </span>
        <FontAwesomeIcon
          icon={editing ? faCheck : faPenToSquare}
          className="clickable"
          onClick={this.handleEdit}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="clickable"
          onClick={this.handleDelete}
        />
      </li>
    );
  }
}

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
    nominees.unshift({ name, count: 0 });
    this.setState({ nominees });
  }

  handleNomineeEdit = (name) => {
    // var name = event.target.parentElement.querySelector(".name");
  };

  handleNomineeDelete = (name) => {
    const nominees = this.state.nominees.filter((n) => n.name !== name);
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
                onEdit={() => this.handleNomineeEdit(name)}
                onDelete={() => this.handleNomineeDelete(name)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NomineesManager;
