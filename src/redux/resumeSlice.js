import { createSlice } from '@reduxjs/toolkit';

// Initial state of the resume
const initialState = {
  fontFamily: 'Arial',
  fontSize: 16,
  margin: 10,
  padding: 10,
  color: '#000000',
  sections: [],  // This stores the sections of the resume
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setMargin: (state, action) => {
      state.margin = action.payload;
    },
    setPadding: (state, action) => {
      state.padding = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    addSection: (state) => {
      state.sections.push({
        id: Date.now(),  // Unique ID for each section
        component: 'NewSection',
      });
    },
  },
});

export const {
  setFontFamily,
  setFontSize,
  setMargin,
  setPadding,
  setColor,
  addSection,
} = resumeSlice.actions;

export default resumeSlice.reducer;
