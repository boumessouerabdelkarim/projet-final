import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
 // add a new resto
 export const addResto = createAsyncThunk("restaurant/add", async ({resto}) => {
    try {
      let result = await axios.post("http://localhost:5000/restaurant/add", resto);
  
      return result.data;
    } catch (error) {
      console.log(error);
    }
  });
   //get all resto
export const getallresto=createAsyncThunk("restaurant/",async()=>{
  try {
      let result= await axios.get("http://localhost:5000/restaurant/");
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get restaurant by id
export const getrestoById=createAsyncThunk("restaurant/:id",async(id)=>{
  try {
      let result=await axios.get(`http://localhost:5000/restaurant/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get restaurant by type
export const getrestoByType=createAsyncThunk("restaurant/bytype/:type",async(type)=>{
    try {
        let result=await axios.get(`http://localhost:5000/restaurant/bytype/${type}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
  });

//delete  resto
export const deleteresto =createAsyncThunk("restaurant/delete/:id",async(id)=>{
  try {
      let result=await axios.delete(`http://localhost:5000/restaurant/delete/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
//update resto
export const updateresto=createAsyncThunk("restaurant/update/:id",async({id,res})=>{
  try {
    let result= await axios.put(`http://localhost:5000/restaurant/update/${id}`,res);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
//add a new comment
export const AddCommentResto=createAsyncThunk("restaurant/comment-rest/:id",async({id,comment})=>{
  try {
    let result= await axios.patch(`http://localhost:5000/restaurant/comment-rest/${id}`,comment);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
//delete comment
export const DeleteCommentResto=createAsyncThunk("restaurant/delete-comment-rest/:id",async({id,Id_comment})=>{
  try {
    let result= await axios.patch(`http://localhost:5000/restaurant/delete-comment-rest/${id}`,{Id_comment});
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
const initialState = {
    resto: null,
    status: null,
    restos:null
}

export const RestoSlice = createSlice({
  name: 'resto',
  initialState,
  reducers: {},
  extraReducers: {
    //add a new resto
    [addResto.fulfilled]: (state,action) => {state.status="successe"
state.resto=action.payload?.rests},
    [addResto.rejected]: (state) => {state.status="failed"},
    [addResto.pending]: (state) => {state.status="pending"},
    //get all resto
    [getallresto.fulfilled]: (state,action) => {state.status="successe";
  state.restos=action.payload?.rests},
    [getallresto.rejected]: (state) => {state.status="failed"},
    [getallresto.pending]: (state) => {state.status="pending" },
    //get rest by id
    [getrestoById.fulfilled]: (state,action) => {state.status="successe";
  state.resto=action.payload?.rests},
    [getrestoById.rejected]: (state) => {state.status="failed"},
    [getrestoById.pending]: (state) => {state.status="pending" },
    //getrestoByType
    [getrestoByType.fulfilled]: (state,action) => {state.status="successe";
  state.restos=action.payload?.rests},
    [getrestoByType.rejected]: (state) => {state.status="failed"},
    [getrestoByType.pending]: (state) => {state.status="pending" },
    //deleteresto
    [deleteresto.fulfilled]: (state) => {state.status="successe"},
    [deleteresto.rejected]: (state) => {state.status="failed"},
    [deleteresto.pending]: (state) => {state.status="pending"},
    //updateresto
    [updateresto.fulfilled]: (state,action) => {state.status="successe"
state.resto=action.payload?.rests},
    [updateresto.rejected]: (state) => {state.status="failed"},
    [updateresto.pending]: (state) => {state.status="pending"},
   //add a new comment
   [AddCommentResto.fulfilled]: (state,action) => {state.status="successe"
   state.resto=action.payload?.rests},
       [AddCommentResto.rejected]: (state) => {state.status="failed"},
       [AddCommentResto.pending]: (state) => {state.status="pending"},
//delete comment 
[DeleteCommentResto.fulfilled]: (state) => {state.status="successe"},
   [DeleteCommentResto.rejected]: (state) => {state.status="failed"},
   [DeleteCommentResto.pending]: (state) => {state.status="pending"},
    
  }

})



export default RestoSlice.reducer