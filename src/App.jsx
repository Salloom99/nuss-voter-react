import React from "react";
import { Route, Routes } from "react-router-dom";
import SnackBarStack from "./components/common/snackbar";
import Login from './components/login';
import Dashboard from './components/dashboard';
import Nominees from './components/nominees';

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
