import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  //set state for players to be an empty array
  const [players, setPlayers] = useState([]);
  //set state for selected player to be an empty object
  const [selectedPlayer, setSelectedPlayer] = useState({});

  const handleSetPlayers = async () => {
    const getData = await fetch("/api/players");
    const json = await getData.json();
    setPlayers(json);
  };

  const handleSetSelectedPlayer = async (playerId) => {
    const getData = await fetch(`/api/players/${playerId}`);
    const json = await getData.json();
    setSelectedPlayer(json);
  };

  useEffect(() => {
    handleSetPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <p>{player.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
