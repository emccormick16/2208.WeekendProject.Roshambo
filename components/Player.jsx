import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();

  const [player, setPlayer] = useState({});
  const [doneLoading, setDoneLoading] = useState(false); // True if no longer loading

  const handleSetPlayer = async () => {
    const getData = await fetch(`/api/players/${playerId}`);
    const json = await getData.json();
    setPlayer(json);
    setDoneLoading(true);
  };

  useEffect(() => {
    handleSetPlayer();
  }, []);

  if (!doneLoading) return <div>Loading...</div>;
  else
    return (
      <div key={player.id}>
        <div>Player ID: {player.id}</div>
        <div>Player: {player.username}</div>
        <div>
          {player.games.map((game) => {
            return (
              <div key={game.id}>
                The result of Game {game.id} was {game.result}
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Player;
