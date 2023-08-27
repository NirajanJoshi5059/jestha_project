import { createSlice } from "@reduxjs/toolkit";
import { getUser, setUser } from "./localstorage";


const initialState= {
    users:getUser()
};

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers:{
        addUser: (state, action)=>{
            state.users.push(action.payload);
            setUser(state.users);
        },

        updateUser : (state, action)=>{
            state.users= state.users.map((user) => user.id === action.payload.id ? action.payload : user);
            setUser(state.users);
        },

        removeUser : (state, action)=>{
            state.users.splice(action.payload, 1);
            setUser(state.users);
        }
    }
});

export const {addUser, updateUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
// this default export will be exported to the store.js as userReducer