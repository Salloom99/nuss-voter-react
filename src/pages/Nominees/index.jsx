import React, { Component } from "react";
import NomineesManager from "../../components/nominees/nomineesManager";
import { SimlpleMenu } from "../../components/common/menu";
import { getNomineesIn } from "../../services/nomineeService";
import FullCard from "../../layouts/cards/fullCard";
import FlexContainer from "./../../layouts/containers/flexContainer";
import withUserContext from "./../../hoc/withUnitContext";
import { getUnit } from "../../services/unitService";
import withNavigate from './../../hoc/withNavigate';

class Nominees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitName: "",
      toAdd: [],
      toUpdate: [],
      toDelete: [],
    };
  }

  async componentDidMount() {
    const { id: unitId } = this.props.context.user;
    const { data: unitData } = await getUnit(unitId);
    const { data: nomineesData } = await getNomineesIn(unitId);
    
    const nominees = [...nomineesData]

    this.setState({ unitName: unitData.name, nominees });
  }

  handleBackClicked = () => {
    this.props.navigate('/dashboard');
  };

  render() {
    const {unitName} = this.state;

    return (
      <FlexContainer>
        <FullCard>
          <SimlpleMenu
            unit={"مرشحي " + unitName}
            onBackClicked={this.handleBackClicked}
          />
          <NomineesManager />
        </FullCard>
      </FlexContainer>
    );
  }
}

export default withNavigate(withUserContext(Nominees));
