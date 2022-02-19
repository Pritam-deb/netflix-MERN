import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/newMovie" element={<NewMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
