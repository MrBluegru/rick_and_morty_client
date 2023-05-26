import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCharacters } from "../services/characters";

export const getCharacters = createAsyncThunk("character/all", async () => {
  return  await getAllCharacters();
});
