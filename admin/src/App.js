import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Router>
    //     <Routes>
    //       <div className="container">
    //       </div>
    //     </Routes>
    //   </Router>
    // </div>
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
