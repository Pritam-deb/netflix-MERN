import { useContext } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import { AuthContext } from "./authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route
          exact
          path="/register"
          element={!user ? <Register /> : <Home />}
        />
        <Route exact path="/Login" element={!user ? <Login /> : <Home />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch type="watch" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
