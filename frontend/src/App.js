import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  const user = true;
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
        <Route exact path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
