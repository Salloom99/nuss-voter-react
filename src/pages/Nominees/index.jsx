import React, { Component } from 'react';
import NomineesManager from "../../components/nominees/nomineesManager";
import { SimlpleMenu } from "../../components/common/menu";
import { nominees } from "../../services/fakeNomineeService";

class Nominees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toAdd: [],
      toUpdate: [],
      toDelete: []
    };
  }

  handleBackClicked = () => {
    console.log(this.state);
  };

  render() { 
    return (
      <div className="container-flex">
        <section className="card card--full">
          <SimlpleMenu
            unit={"مرشحي " + this.props.unit}
            onBackClicked={this.handleBackClicked}
          />
          <NomineesManager nominees={nominees} />
        </section>
      </div>
    );
  }
}

export default Nominees;