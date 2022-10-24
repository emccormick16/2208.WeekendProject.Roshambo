import React from "react";
import Leaderboard from "../components/Leaderboard";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="row container">
      <Link to="/leaderboard">Leaderboard</Link>
      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
