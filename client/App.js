import React from "react";
import Leaderboard from "../components/Leaderboard";
import Player from "../components/Player";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="row container">
      <Link to="/leaderboard">Leaderboard</Link>
      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:playerId" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
