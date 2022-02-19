import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/watch" element={<Watch />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
