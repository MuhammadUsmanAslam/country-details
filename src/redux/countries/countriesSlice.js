import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  isLoading: false,
  error: undefined,
};

const URL = 'ULR-HERE';

// Fetch all Countries
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const res = await axios.get(URL);
    return res;
  } catch (error) {
    return error;
  }
});

const countriesSlice = createSlice(
  {
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
  },
);

export default countriesSlice.reducer;