import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  //set state for players to be an empty array
  const [players, setPlayers] = useState([]);

  const handleSetPlayers = async () => {
    const getData = await fetch("/api/players");
    const json = await getData.json();
    setPlayers(json);
  };

  useEffect(() => {
    handleSetPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div>
            <Link to={`/leaderboard/${player.id}`} key={player.id}>
              {player.username}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
