import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SnackBarStack from "./components/common/snackbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nominees from "./pages/Nominees";
import UserContext from "./context/userContext";
import NomineeContext from "./context/nomineeContext";
import NotFound from "./pages/Notfound/index";
import jwtDecode from "jwt-decode";

function App() {
  const [user, setUser] = useState();
  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      setUser({ unit:user.user_id });
    } catch (error) {}
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NomineeContext.Provider value={{ nominees, setNominees }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nominees" element={<Nominees />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route
            index
            element={
              user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <SnackBarStack />
      </NomineeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
