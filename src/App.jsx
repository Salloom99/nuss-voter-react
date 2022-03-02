import { Route, Routes, useNavigate } from "react-router-dom";
import { ExpandedMenu, SimlpleMenu } from "./components/menu/menu";
import NomineesTable from "./components/dashboard/nomineeTable";
import NomineesManager from "./components/nominees manager/nomineesManager";
import LoginCard from "./components/login/login";

function Nominees(props) {
  const navigate = useNavigate();
  function handleBackClicked() {
    navigate(-1);
  }

  return (
    <div className="container-flex">
      <section className="card card--dashboard">
        <SimlpleMenu unit={"مرشحي " + props.unit} onBackClicked={handleBackClicked}/>
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
      <section className="card card--dashboard">
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
      <section className="card card--login">
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
     <div className="snackbar-stack"></div>
  </>
  );
}

export default App;
