import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllPlayers, createPlayer } from "../store/leaderboardSlice";
import axios from "axios";

const PlayerForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [doneLoading, setDoneLoading] = useState(false);
  const [validUsername, setValidUsername] = useState(true);

  //grab all players
  const allPlayers = useSelector((state) => state.leaderboard.allPlayers);
  const fetchAllPlayers = async () => {
    const { data: players } = await axios.get("/api/players");
    dispatch(setAllPlayers(players));
    setDoneLoading(true);
  };

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  //create new player
  const createNewPlayer = async (event) => {
    event.preventDefault();
    if (validUsername) {
      const body = { username: event.target.value };
      const response = await axios.post("api/players", body);
      dispatch(createPlayer(response.data));
      navigate("/leaderboard");
    }
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="e.g. David"></input>
        <button type="submit" onClick={createNewPlayer}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
