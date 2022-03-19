import React, { Component } from "react";
import {
  faPenToSquare,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAnimatedHideShow from "../../hooks/useAnimatedHideShow";


export function Nominee({ id, old, name, onDelete }) {
  const [hiddenClass, handleDelete] = useAnimatedHideShow(
    "nominee--hidden",
    () => onDelete(id)
  );
  
  return (
    <li className={"nominee" + hiddenClass}>
      <span className="name">{name}</span>

      <FontAwesomeIcon icon={old ? faCheck : faPenToSquare} />
      <FontAwesomeIcon
        icon={faTrash}
        className="clickable"
        onClick={handleDelete}
      />
    </li>
  );
}

export class NomineeOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      // editing: false,
      old: this.props.old,
      name: this.props.name,
    };
    this.nameText = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => this.setState({ hidden: false }), 100);
  }

  // handleEdit = () => {
  //   const { name, editing } = this.state;
  //   const span = this.nameText.current;
  //   // this.props.onEdit(this.props.id);
  //   const newName = editing ? span.innerText : name;
  //   this.setState({ editing: !editing, name: newName }, () => {
  //     span.focus();
  //   });
  // };

  handleDelete = () => {
    this.setState({ hidden: true });
    setTimeout(() => this.props.onDelete(this.props.id), 500);
  };

  // handleNameChange = () => {
  //   // this.setState({name: this.nameText.current.innerText})
  //   console.log("changing");
  // };

  render() {
    // const { name, editing } = this.state;
    const { name, old, hidden } = this.state;

    const hiddenClass = hidden ? " nominee--hidden" : "";

    return (
      <li className={"nominee" + hiddenClass} ref={this.self}>
        <span
          className="name"
          onInput={this.handleNameChange}
          ref={this.nameText}
          // contentEditable={editing}
        >
          {name}
        </span>
        {/* <FontAwesomeIcon
          icon={editing ? faCheck : faPenToSquare}
          className="clickable"
          onClick={this.handleEdit} /> */}
        <FontAwesomeIcon icon={old ? faCheck : faPenToSquare} />
        <FontAwesomeIcon
          icon={faTrash}
          className="clickable"
          onClick={this.handleDelete}
        />
      </li>
    );
  }
}
