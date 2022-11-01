import { createSlice } from "@reduxjs/toolkit";

//set the initial state
const initialState = {
  allPlayers: [],
  selectedPlayer: {},
};

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setAllPlayers: (state, action) => {
      state.allPlayers = action.payload;
    },
    setSelectedPlayer: (state, action) => {
      state.selectedPlayer = action.payload;
    },
    createPlayer: (state, action) => {
      state.allPlayers.push(action.payload);
    },
  },
});

export const { setAllPlayers, setSelectedPlayer, createPlayer } =
  leaderboardSlice.actions;
export default leaderboardSlice.reducer;
