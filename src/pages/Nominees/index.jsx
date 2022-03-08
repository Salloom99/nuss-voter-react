import React, { Component } from 'react';
import NomineesManager from "../../components/nominees/nomineesManager";
import { SimlpleMenu } from "../../components/common/menu";
import { nominees } from "../../services/fakeNomineeService";
import FullCard from '../../layouts/cards/fullCard';
import FlexContainer from './../../layouts/containers/flexContainer';

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
      <FlexContainer>
          <FullCard>
          <SimlpleMenu
            unit={"مرشحي " + this.props.unit}
            onBackClicked={this.handleBackClicked}
          />
          <NomineesManager nominees={nominees} />
        </FullCard>
      </FlexContainer>
    );
  }
}

export default Nominees;