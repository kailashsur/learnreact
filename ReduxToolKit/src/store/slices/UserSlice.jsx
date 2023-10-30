import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : "users",
    initialState : [],
    reducers : {
        addUser(state, action){},
        removeUser(state, action){},
        clearAll(state, action){}
    }

})


export default userSlice.reducer;