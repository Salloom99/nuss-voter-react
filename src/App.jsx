import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ExpandedMenu, SimlpleMenu } from "./components/menu/menu";
import NomineesTable from "./components/dashboard/nomineeTable";
import NomineesManager from "./components/nominees manager/nomineesManager";
import LoginCard from "./components/login/login";
import SnackBarStack from "./components/common/snackbar";

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
        <NomineesManager
          nominees={[
            { id: 0, name: "محمد سالم دوماني", votes: 255 },
            { id: 1, name: "محمد جسور حاج رضوان", votes: 245 },
            { id: 2, name: "سامر القمحة", votes: 230 },
          ]}
        />
      </section>
    </div>
  );
}

function Dashboard(props) {
  return (
    <div className="container-flex">
      <section className="card card--full">
        <ExpandedMenu unit={props.unit} />
        <NomineesTable
          nominees={[
            { name: "محمد سالم دوماني", votes: 255 },
            { name: "محمد جسور حاج رضوان", votes: 245 },
            { name: "سامر القمحة", votes: 230 },
          ]}
          totalVotes={271}
        />
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
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard unit={"كلية الهندسة الميكانيكية والكهربائية"} />}
        />
        <Route
          path="/nominees"
          element={<Nominees unit={"كلية الهندسة الميكانيكية والكهربائية"} />}
        />
      </Routes>
      <SnackBarStack />
    </>
  );
}

export default App;
