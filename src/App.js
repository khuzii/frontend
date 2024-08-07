// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import Home from './Components/home';
import Landing from "./Components/landing";
import Video from "./Components/video";
import Photo from "./Components/photo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          {/* not sure about the which page is home page */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/landing" element={<Landing />} />
            <Route exact path="/video" element={<Video />} />
            <Route exact path="/photo" element={<Photo />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
