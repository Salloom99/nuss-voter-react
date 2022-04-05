import React, { Component, useEffect } from "react";
import useAnimatedHideShow from "./../../hooks/useAnimatedHideShow";

export let notify;

function SnackBar({ message, poke }) {
  const [hiddenClass, handleDelete] = useAnimatedHideShow(
    "delete",
    poke
  );

  useEffect(() => {
    setTimeout(handleDelete, 4000);
  }, [handleDelete]);

  return (
    <div className={"snackbar " + hiddenClass}>
      <p>{message}</p>
    </div>
  );
}

class SnackBarStack extends Component {
  state = { snacks: [] };

  componentDidMount() {
    notify = (message) => this.addSnack(message);
  }

  addSnack = (message) => {
    const snacks = [...this.state.snacks];
    const id = Math.random().toString(36).substring(2, 9);
    snacks.push({ id, message });
    this.setState({ snacks });
  };

  removeSnack = (id) => {
    const snacks = this.state.snacks.filter((snack) => snack.id !== id);
    this.setState({ snacks });
  };

  render() {
    const snackBars = this.state.snacks.map(({ id, message }) => (
      <SnackBar key={id} message={message} poke={() => this.removeSnack(id)} />
    ));
    return (
      <div ref={this.props.ref} className="snackbar-stack">
        {snackBars}
      </div>
    );
  }
}

export default SnackBarStack;
