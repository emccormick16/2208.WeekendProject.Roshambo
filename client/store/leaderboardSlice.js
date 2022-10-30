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
  },
});

export const { setAllPlayers, setSelectedPlayer } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
