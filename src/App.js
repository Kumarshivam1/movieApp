import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./Home";
import MoviePage from "./MoviePage.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<MoviePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
