import Menu from "./components/menu";
import NomineesTable from "./components/nomineeTable";

function App() {
  return (
    <div className="container-flex">
      <section className="card card--dashboard">
        <Menu />
        <NomineesTable
          nominees={[
            { name: "محمد سالم دوماني", votes: 255 },
            { name: "محمد جسور حاج رضوان", votes: 245 },
            { name: "سامر القمحة", votes: 230 },
          ]}
          totalVotes={271}
        />
      </section>
      <div className="snackbar-stack"></div>
    </div>
  );
}

export default App;
