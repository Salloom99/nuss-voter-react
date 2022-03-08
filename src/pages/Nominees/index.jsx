import React, { Component } from "react";
import NomineesManager from "../../components/nominees/nomineesManager";
import { SimlpleMenu } from "../../components/common/menu";
import { getNomineesIn } from "../../services/nomineeService";
import FullCard from "../../layouts/cards/fullCard";
import FlexContainer from "./../../layouts/containers/flexContainer";
import withUnitContext from "./../../hoc/withUnitContext";

class Nominees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominees: [],
      toAdd: [],
      toUpdate: [],
      toDelete: [],
    };
  }

  async componentDidMount() {
    const { pk: unitId } = this.props.context.unit;
    const { data: nominees } = await getNomineesIn(unitId);

    this.setState({ nominees });
  }

  handleBackClicked = () => {
    console.log(this.state);
  };

  render() {
    const { name } = this.props.context.unit;

    return (
      <FlexContainer>
        <FullCard>
          <SimlpleMenu
            unit={"مرشحي " + name}
            onBackClicked={this.handleBackClicked}
          />
          <NomineesManager nominees={this.state.nominees} />
        </FullCard>
      </FlexContainer>
    );
  }
}

export default withUnitContext(Nominees);
