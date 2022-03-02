import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ExpandedMenu, SimlpleMenu } from "./components/menu/menu";
import NomineesTable from "./components/dashboard/nomineeTable";
import NomineesManager from "./components/nominees manager/nomineesManager";
import LoginCard from "./components/login/login";
import SnackBarStack from "./components/common/snackbar";
import { nominees } from "./services/nomineesService";

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

function Dashboard(props) {
  return (
    <div className="container-flex">
      <section className="card card--full">
        <ExpandedMenu unit={props.unit} />
        <NomineesTable nominees={nominees} totalVotes={271} />
      </section>
    </div>
  );
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
  const unitName = 'كلية الهندسة المعلوماتية';
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard unit={unitName} />} />
        <Route path="/nominees" element={<Nominees unit={unitName} />} />
      </Routes>
      <SnackBarStack />
    </>
  );
}

export default App;
