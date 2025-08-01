import { createSlice } from '@reduxjs/toolkit';
import { getSource, getSourceList, uploadSource } from './actions';

const notebookSlice = createSlice({
  name: 'notebook',
  initialState: {
    currentSource: null,
    sourceList: [],
    summary: null, 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSource.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSource.fulfilled, (state, action) => {
        state.loading = false;
        state.currentSource = action.payload;
        state.summary = action.payload.summary || null;
      })
      .addCase(getSource.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSourceList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSourceList.fulfilled, (state, action) => {
        state.loading = false;
        state.sourceList = action.payload;
      })
      .addCase(getSourceList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default notebookSlice.reducer;