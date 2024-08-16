import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
};

export default App;
