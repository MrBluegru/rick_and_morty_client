import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "../action";

interface CharactersState {
  characters: [];
  unalterableCharacters: [];
  // status: "idle" | "loading" | "succeeded" | "failed";
  // error: string | null;
}

const initialState: CharactersState = {
  //? Characters
  characters: [],
  unalterableCharacters: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state) => {
      state.characters = state.unalterableCharacters;
    },
  },
  extraReducers: (builder) => {
    builder

      //? Characters
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.unalterableCharacters = action.payload;
        state.characters = action.payload;
      });
  },
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
