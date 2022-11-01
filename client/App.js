import React from "react";
import Leaderboard from "./components/Leaderboard";
import Player from "./components/Player";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import PlayerForm from "./components/PlayerForm";

const App = () => {
  return (
    <div className="row container">
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <Link to="/leaderboard">
        <button>Leaderboard</button>
      </Link>
      <Link to="/create-player">
        <button>Create Player</button>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard/:playerId" element={<Player />} />
        <Route path="/create-player" element={<PlayerForm />} />
      </Routes>
    </div>
  );
};

export default App;
