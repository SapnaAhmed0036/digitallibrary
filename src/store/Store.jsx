// import { configureStore } from "@reduxjs/toolkit";
// import  studentSlice  from "./Slices/StudentSlice";

// const store=configureStore({
//     reducer:{
//         students:studentSlice,
//     },
// })

// export default store;

// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './Slices/StudentSlice';
import { loadState, saveState } from './utils/localStorage';

// Load state from localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    students: studentSlice,
  },
  preloadedState, // Use the loaded state as the initial state
});

// Save state to localStorage on changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
