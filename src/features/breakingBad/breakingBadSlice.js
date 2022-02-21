import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  characters: [],
  loading: false,
  character: {}
}

export const fetchCharacters = createAsyncThunk(
  'breakingBad/fetchCharacters',
  async () => {
    const res = await axios.get('https://www.breakingbadapi.com/api/characters?limit=32');
    const data = res.data;

    return data;
  }
);

export const fetchCharacter = createAsyncThunk(
  'breakingBad/fetchCharacter',
  async (char_id) => {
    const res = await axios.get(`https://www.breakingbadapi.com/api/characters/${char_id}`);
    const [data] = res.data;

    return data;
  }
)

export const breakingBadSlice = createSlice({
  name: 'breaking bad',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload
        state.loading = false
      })
      .addCase(fetchCharacter.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.character = action.payload
        state.loading = false
      })
  },
});

export default breakingBadSlice.reducer;
