import React, { Component } from 'react';


const SnackBar = ({ message }) => {
  return (
    <div className="snack-bar">
      <p>{message}</p>
    </div>
  );
};

class SnackBarStack extends Component {
  state = { snacks: [] };

  addSnack = (message) => {
    const snacks = [...this.state.snacks];
    snacks.push({ message });
  };

  render() {
    const snackBars = this.state.snacks.map((snack) => (
      <SnackBar message={snack.message} />
    ));
    return (
      <div ref={this.props.ref} className="snackbar-stack">
        {snackBars}
      </div>
    );
  }
}

export default SnackBarStack;
