import React, { Component, useEffect } from "react";

export let notify;

export function notifies(message) {
  console.log(message);
}

function SnackBar({ message, poke }) {
  useEffect(() => {
    setTimeout(poke, 3000);
  }, []);

  return (
    <div className="snackbar">
      <p>{message}</p>
    </div>
  );
};

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
    const snacks = this.state.snacks.filter(snack => snack.id !== id)
    this.setState({ snacks });
  }

  render() {
    const snackBars = this.state.snacks.map(({id, message})=> 
      <SnackBar
        key={id}
        message={message}
        poke={() => this.removeSnack(id)}
      />
    );
    return (
      <div ref={this.props.ref} className="snackbar-stack snackbar--top">
        {snackBars}
      </div>
    );
  }
}

export default SnackBarStack;
