import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllPlayers } from "../store/leaderboardSlice";

const Leaderboard = () => {
  //set state for players to be an empty array
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.leaderboard.allPlayers);

  const fetchAllPlayers = async () => {
    const { data: players } = await axios.get("/api/players");
    dispatch(setAllPlayers(players));
  };

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  return (
    <div>
      {allPlayers.map((player) => {
        return (
          <div key={player.id}>
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
