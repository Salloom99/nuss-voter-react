import React, { Component } from "react";
import NomineesTable from "../../components/dashboard/nomineeTable";
import { ExpandedMenu } from "../../components/common/menu";
import { getUnit } from "../../services/unitService";
import { getNomineesIn } from "../../services/nomineeService";
import { getVotersCountIn } from "../../services/voterService";
import withUserContext from "../../hoc/withUnitContext";
import FlexContainer from "./../../layouts/containers/flexContainer";
import FullCard from "./../../layouts/cards/fullCard";






class Dashboard extends Component {
  state = {
    unit: {
      name: "",
      state: "",
    },
    totalVotes: "0",
    nominees: [],
  };

  async componentDidMount() {
    const { id: unitId } = this.props.context.user;

    const { data: unit } = await getUnit(unitId);
    const { data: totalVotes } = await getVotersCountIn(unitId);
    const { data: nominees } = await getNomineesIn(unitId);
    // const totalVotes = "0";
    this.setState({ unit, totalVotes, nominees });
  }

  render() {
    const { unit, totalVotes, nominees } = this.state;
    
    return (
      <FlexContainer>
        <FullCard>
          <ExpandedMenu unit={unit} />
          <NomineesTable
            unit={unit.name}
            nominees={nominees}
            totalVotes={totalVotes}
          />
        </FullCard>
      </FlexContainer>
    );
  }
}

export default withUserContext(Dashboard);
