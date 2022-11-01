import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSelectedPlayer } from "../store/leaderboardSlice";

const Player = () => {
  const dispatch = useDispatch();
  const { playerId } = useParams();

  const selectedPlayer = useSelector(
    (state) => state.leaderboard.selectedPlayer
  );

  const [doneLoading, setDoneLoading] = useState(false); // True if no longer loading

  const handleSetPlayer = async () => {
    const { data: player } = await axios(`/api/players/${playerId}`);
    dispatch(setSelectedPlayer(player));
    setDoneLoading(true);
  };

  useEffect(() => {
    handleSetPlayer();
  }, []);

  if (!doneLoading) return <div>Loading...</div>;
  else
    return (
      <div key={selectedPlayer.id}>
        <div>Player ID: {selectedPlayer.id}</div>
        <div>Player: {selectedPlayer.username}</div>
        <div>
          {selectedPlayer.games.map((game) => {
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
