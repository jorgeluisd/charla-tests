import { createSlice } from '@reduxjs/toolkit';

const fetchDataSlice = createSlice({
  name: 'fetchDataSlice',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: state => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
