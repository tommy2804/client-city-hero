import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inspectors: [],
  inspector: {},
};

export const reportSlice = createSlice({
  name: 'inspectors',
  initialState,
  reducers: {
    addInspectors: (state, action) => {
      state.inspectors = action.payload;
    },
    setInspector: (state, action) => {
      state.inspector = action.payload;
    }
  },
});

export const { addInspectors, setInspector } = reportSlice.actions;
export const selectInspectors = (state) => state.report.inspectors;
export const selectInspector = (state) => state.report.inspector;

export default reportSlice.reducer;
