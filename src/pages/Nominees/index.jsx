import React, { Component } from "react";
import NomineesManager from "../../components/nominees/nomineesManager";
import { SimlpleMenu } from "../../components/common/menu";
import {
  addNomineesTo,
  deleteNominee,
  getNomineesIn,
} from "../../services/nomineeService";
import FullCard from "../../layouts/cards/fullCard";
import FlexContainer from "./../../layouts/containers/flexContainer";
import withUserContext from "./../../hoc/withUnitContext";
import { getUnit } from "../../services/unitService";
import withNavigate from "./../../hoc/withNavigate";

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

    const nominees = [...nomineesData];

    this.setState({ unitName: unitData.name, nominees });
  }

  async applyChanges() {
    const { id: unit } = this.props.context.user;
    const { toAdd, toDelete } = this.state;

    await addNomineesTo(toAdd, unit);

    for (const nomineeId of toDelete) await deleteNominee(nomineeId);
  }

  handleBackClicked = async () => {
    const confirmed = window.confirm("هل تريد حفظ التغييرات قبل الرجوع؟");

    if (confirmed) await this.applyChanges();

    this.props.navigate("/dashboard");
  };

  handleAddNominee = (name) => {
    const toAdd = [...this.state.toAdd];
    toAdd.push(name);
    this.setState({ toAdd });
  };

  handleDeleteNominee = (id, name) => {
    if (id) {
      const toDelete = [...this.state.toDelete];
      toDelete.push(id);
      this.setState({ toDelete });
      return;
    }
    const toAdd = this.state.toAdd.filter(
      (nomineeName) => nomineeName !== name
    );
    this.setState({ toAdd });
  };

  render() {
    const { unitName } = this.state;

    return (
      <FlexContainer>
        <FullCard>
          <SimlpleMenu
            unit={"مرشحي " + unitName}
            onBackClicked={this.handleBackClicked}
          />
          <NomineesManager
            onAdd={this.handleAddNominee}
            onDelete={this.handleDeleteNominee}
          />
        </FullCard>
      </FlexContainer>
    );
  }
}

export default withNavigate(withUserContext(Nominees));
