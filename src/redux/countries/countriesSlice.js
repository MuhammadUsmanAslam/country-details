import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  isLoading: false,
  error: '',
};

// Fetch all Countries
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const result = await axios.get('all')
    .then((response) => response.data).catch((error) => error);
  return result;
});

const countriesSlice = createSlice(
  {
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCountries.pending, (state) => ({
        ...state,
        isLoading: true,
      })).addCase(fetchCountries.fulfilled, (state, action) => {
        const loadedCountries = action.payload;
        console.log(loadedCountries[0]);
        const refactoredCountries = [];
        loadedCountries.forEach((country, index) => {
          refactoredCountries.push({
            id: index,
            name: country.name.common,
            capital: country.capital ? country.capital[0] : 'N/A',
            flag: country.flags.png,
            continent: country.continents[0],
            map: country.maps.googleMaps,
            region: country.subregion,
            population: country.population,
            area: country.area,
          });
        });
        return {
          ...state,
          isLoading: false,
          error: '',
          countries: refactoredCountries,
        };
      }).addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
      }));
    },
  },
);

export default countriesSlice.reducer;
