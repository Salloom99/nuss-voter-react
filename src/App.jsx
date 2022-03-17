import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserContext from "./context/userContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nominees from "./pages/Nominees";
import NotFound from "./pages/Notfound/index";
import SnackBarStack from "./components/common/snackbar";

function App() {
  const token = localStorage.getItem("token");
  let userId;

  if (token) {
    const userDecoded = jwtDecode(token);
    userId = userDecoded.user_id;
  }

  const [user, SetUser] = useState({ id: userId });

  console.log(user);

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      <Routes>
        <Route path="/login" element={
        user ? <Navigate to="/dashboard" /> : <Login />
        } />
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
    </UserContext.Provider>
  );
}

export default App;
