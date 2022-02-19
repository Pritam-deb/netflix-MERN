import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    // <Router>
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        {/* <Route exact path="/"> */}
        <Home />
        {/* </Route> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
