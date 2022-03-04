import React, { Component } from 'react';
import NomineesTable from "./nomineeTable";
import { ExpandedMenu } from "../menu/menu";
import axios from "axios";


class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        unit: {
          name: "",
          state: "",
        },
        totalVotes: "0",
        nominees: [],
      };
    }
  
    async componentDidMount() {
      const { data: unitData } = await axios.get(
        `http://localhost:8000/units/${this.props.unit}`
      );
  
      const { data: totalVotesData } = await axios.get(
        `http://localhost:8000/voters/total-in/${'dam_ite'}`
      );
      const totalVotes = totalVotesData['total_votes'];
  
      const { data: nominees } = await axios.get(
        "http://localhost:8000/nominees/?ordering=-votes_count&unit=dam_ite"
      );
      
      const unit = { ...this.state.unit };
      unit.name = unitData.name;
      unit.state = unitData.state;
      this.setState({ unit, totalVotes, nominees });
    }
  
    render() {
      const { unit, totalVotes, nominees } = this.state;
      return (
        <div className="container-flex">
          <section className="card card--full">
            <ExpandedMenu unit={unit} />
            <NomineesTable unit={unit.name} nominees={nominees} totalVotes={totalVotes} />
          </section>
        </div>
      );
    }
  }

export default Dashboard;