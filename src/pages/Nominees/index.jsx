import React, { Component } from "react";
import NomineesManager from "../../components/nominees/nomineesManager";
import { SimlpleMenu } from "../../components/common/menu";
import { getNomineesIn } from "../../services/nomineeService";
import FullCard from "../../layouts/cards/fullCard";
import FlexContainer from "./../../layouts/containers/flexContainer";
import withUserContext from "./../../hoc/withUnitContext";
import { getUnit } from "../../services/unitService";

class Nominees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitName: "",
      nominees: [],
      toAdd: [],
      toUpdate: [],
      toDelete: [],
    };
  }

  async componentDidMount() {
    const { unit: unitId } = this.props.context.user;
    const { data: nominees } = await getNomineesIn(unitId);
    const { data: unitData } = await getUnit(unitId);

    this.setState({ unitName: unitData.name, nominees });
  }

  handleBackClicked = () => {
    console.log(this.state);
  };

  render() {
    return (
      <FlexContainer>
        <FullCard>
          <SimlpleMenu
            unit={"مرشحي " + this.state.unitName}
            onBackClicked={this.handleBackClicked}
          />
          <NomineesManager nominees={this.state.nominees} />
        </FullCard>
      </FlexContainer>
    );
  }
}

export default withUserContext(Nominees);
