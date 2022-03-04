import React, { Component } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ExpandedMenu, SimlpleMenu } from "./components/menu/menu";
import NomineesTable from "./components/dashboard/nomineeTable";
import NomineesManager from "./components/nominees manager/nomineesManager";
import LoginCard from "./components/login/login";
import SnackBarStack from "./components/common/snackbar";
import { nominees } from "./services/nomineesService";
import axios from "axios";

function Nominees(props) {
  const navigate = useNavigate();
  function handleBackClicked() {
    navigate(-1);
  }

  return (
    <div className="container-flex">
      <section className="card card--full">
        <SimlpleMenu
          unit={"مرشحي " + props.unit}
          onBackClicked={handleBackClicked}
        />
        <NomineesManager nominees={nominees} />
      </section>
    </div>
  );
}

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

function Login() {
  return (
    <div className="container-full-height container-flex">
      <section className="card card--small">
        <LoginCard />
      </section>
    </div>
  );
}

function App() {
  const unit = "dam_ite";
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard unit={unit} />} />
        <Route path="/nominees" element={<Nominees unit={unit} />} />
      </Routes>
      <SnackBarStack />
    </>
  );
}

export default App;
