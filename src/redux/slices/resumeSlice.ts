import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
type ResumeState = {
  fontFamily: string;
  fontSize: number;
  margin: number;
  padding: number;
  color: string;
  sections: Array<{ id: number; component: string }>; // Sections will contain objects with id and component
}

// Initial state of the resume with typed values
const initialState: ResumeState = {
  fontFamily: 'Arial',
  fontSize: 16,
  margin: 10,
  padding: 10,
  color: '#000000',
  sections: [], // This stores the sections of the resume
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    setMargin: (state, action: PayloadAction<number>) => {
      state.margin = action.payload;
    },
    setPadding: (state, action: PayloadAction<number>) => {
      state.padding = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    addSection: (state) => {
      state.sections.push({
        id: Date.now(), // Unique ID for each section
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
