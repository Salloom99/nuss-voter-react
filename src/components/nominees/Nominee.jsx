import React, { Component } from "react";
import {
  faPenToSquare,
  faCheck,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Nominee extends Component {
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
          onClick={this.handleEdit} />
        <FontAwesomeIcon
          icon={faTrash}
          className="clickable"
          onClick={this.handleDelete} />
      </li>
    );
  }
}
