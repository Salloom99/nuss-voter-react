import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserContext from "./context/userContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nominees from "./pages/Nominees";
import NotFound from "./pages/Notfound/index";
import SnackBarStack from "./components/common/snackbar";
import auth from "./services/authService";

function App() {
  const currentUser = auth.getCurrentUser();
  const [user, setUser] = useState({
    id: currentUser ? currentUser.user_id : null,
  });

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nominees" element={<Nominees />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route
          index
          element={
            user.id ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <SnackBarStack />
    </UserContext.Provider>
  );
}

export default App;
