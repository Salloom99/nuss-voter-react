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
    console.log('changing');
  };

  render() {
    const { name, editing } = this.state;
    return (
      <li className="nominee">
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

  addNominee(name) {
    const nominees = [...this.state.nominees];
    const lastId = nominees.at(-1).id;
    nominees.push(
      <Nominee
        id={lastId + 1}
        name={name}
        onEdit={this.handleNomineeEdit}
        onDelete={this.handleNomineeDelete}
      />
    );
    this.setState({ nominees });
  }

  handleNomineeEdit = () => {
    // var name = event.target.parentElement.querySelector(".name");
  };

  handleNomineeDelete = (id) => {
    const nominees = this.state.nominees.filter((n) => n.id !== id);
    this.setState({ nominees });
  };

  handleNomineeAdd = () => {
    console.log("add " + this.state.inputName);
    this.setState({ inputName: "" });
  };

  handleInputChange = (event) => {
    this.setState({ inputName: event.target.value });
  };

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
                key={id}
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
