import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
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
    //   <Routes>
    //     <Navbar />
    //     <div className="container">
    //       <Sidebar />
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/users">
    //         <UserList />
    //       </Route>
    //     </div>
    //   </Routes>
    // </Router>
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <UserList />
      </div>
    </div>
  );
}

export default App;
