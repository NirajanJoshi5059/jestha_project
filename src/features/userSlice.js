import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    users:[]
};

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers:{
        addUser: (state, action)=>{
            state.users.push(action.payload);
        }
    }
});

export const {addUser} = userSlice.actions;

export default userSlice.reducer;
// this default export will be exported to the store.js as userReducer