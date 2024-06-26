import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
    name:'students',
    initialState:[],
    reducers:{
        Student_Id(state, action) {
           
            state.push(action.payload);
            console.log(action.payload);
    }
} 
})
console.log(studentSlice.actions);
export default studentSlice.reducer;
export const {Student_Id}=studentSlice.actions;