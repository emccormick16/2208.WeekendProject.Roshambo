import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();

  const [player, setPlayer] = useState({});

  const handleSetPlayer = async () => {
    const getData = await fetch(`/api/players/${playerId}`);
    const json = await getData.json();
    setPlayer(json);
  };

  useEffect(() => {
    handleSetPlayer();
  }, []);

  return <div>Hello World</div>;
};

export default Player;
