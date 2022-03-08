import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SnackBarStack from "./components/common/snackbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nominees from "./pages/Nominees";
import UnitContext from "./context/unitContext";
import UnitContext from "./context/nomineeContext";

function App() {
  const [unit, setUnit] = useState({ pk: "", name: "" });
  const [nominees, setNominees] = useState([]);

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      <NomineeContext.Provider value={{ nominees, setNominees }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nominees" element={<Nominees />} />
        </Routes>
        <SnackBarStack />
      </NomineeContext.Provider>
    </UnitContext.Provider>
  );
}

export default App;
