import React, { Component } from 'react';
import NomineesManager from "./nomineesManager";
import { SimlpleMenu } from "../menu";
import { nominees } from "../../services/nomineesService";
// import { useNavigate } from "react-router-dom";

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