import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

          // add a new user
export const UserRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
   console.log(result.data)
    return result.data;
    
  } catch (error) {
    console.log(error);
  }
});
// connect  user
export const SignIn = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
   console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
// current user
export const UserCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: { Authorization: localStorage.getItem("token") },
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
});
       //get all users
export const getuser=createAsyncThunk("user/getss",async()=>{
  try {
      let result=  await axios.get("http://localhost:5000/user");
      return result.data
     
  } catch (error) {
      console.log(error)
  }
});

export const getuserById=createAsyncThunk("user/getbyid/:id",async(id)=>{
  try {
      let result=await axios.get(`http://localhost:5000/user/${id}`);
      return  result.data;
  } catch (error) {
      console.log(error)
  }
});

//delete user
export const deleteuser =createAsyncThunk("user/delete/:id",async(id)=>{
  try {
      let result= await axios.delete(`http://localhost:5000/user/delete/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
//update user
export const updateuser=createAsyncThunk("user/update/:id",async({id,edited})=>{
  try {
    let result= await axios.put(`http://localhost:5000/user/update/${id}`,edited);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});


const initialState = {
  user: null,
  status: null,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state)=>localStorage.removeItem('token')
  },
  extraReducers: {
    //add user
    [UserRegister.fulfilled]: (state, action) => {
      state.status = "successe";
      state.user = action.payload?.user;
     // localStorage.setItem("token", action.payload.data.token);
    },
    [UserRegister.rejected]: (state) => {
      state.status = "failed";
    },
    [UserRegister.pending]: (state) => {
      state.status = "pending";
    },
// conect user
    [SignIn.fulfilled]: (state, action) => {
      state.status = "successe";
      state.user = action.payload?.user;
      localStorage.setItem("token", action.payload.token);
    },
    [SignIn.rejected]: (state) => {
      state.status = "failed";
    },
    [SignIn.pending]: (state) => {
      state.status = "pending";
    },
    //current user
    [UserCurrent.fulfilled]: (state, action) => {
      state.status = "successe";
      
      state.user = action.payload?.user;
    },
    [UserCurrent.rejected]: (state) => {
      state.status = "failed";
    },
    [UserCurrent.pending]: (state) => {
      state.status = "pending";
    },
    //get users 
    [getuser.fulfilled]: (state, action) => {
      state.status = "succesuuuuuhuuse";
     
      state.users = action.payload?.users;
    },
    [getuser.rejected]: (state) => {
      state.status = "failed";
    },
    [getuser.pending]: (state) => {
      state.status = "pending";
    },
    //get user by id
    [getuserById.fulfilled]: (state, action) => {
      state.status = "successe";
      
      state.user = action.payload?.user;
    },
    [getuserById.rejected]: (state) => {
      state.status = "failed";
    },
    [getuserById.pending]: (state) => {
      state.status = "pending";
    },
    //delete user
    [deleteuser.fulfilled]: (state, action) => {
      state.status = "successe";
     
    },
    [deleteuser.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteuser.pending]: (state) => {
      state.status = "pending";
    },
    
    //update user
    [updateuser.fulfilled]: (state, action) => {
      state.status = "successe";
      state.user = action.payload?.user;
     
    },
    [updateuser.rejected]: (state) => {
      state.status = "failed";
    },
    [updateuser.pending]: (state) => {
      state.status = "pending";
    },

  },
});

// Action creators are generated for each case reducer function
export const { logout} = userSlice.actions

export default userSlice.reducer;
