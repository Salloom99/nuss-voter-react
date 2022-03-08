import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SnackBarStack from "./components/common/snackbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nominees from "./pages/Nominees";
import UserContext from "./context/userContext";
import NomineeContext from "./context/nomineeContext";
import NotFound from "./pages/Notfound/index";

function App() {
  const [user, setUser] = useState({
    department: "",
    unit: "",
    password: "",
  });
  const [nominees, setNominees] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NomineeContext.Provider value={{ nominees, setNominees }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nominees" element={<Nominees />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route index element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <SnackBarStack />
      </NomineeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
