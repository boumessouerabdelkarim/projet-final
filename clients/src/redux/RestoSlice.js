import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
 // add a new resto
 export const addResto = createAsyncThunk("restaurant/add", async (resto) => {
    try {
      let result = await axios.post("http://localhost:5000/restaurant/add", resto);
  
      return result;
    } catch (error) {
      console.log(error);
    }
  });
   //get all resto
export const getallresto=createAsyncThunk("restaurant/",async()=>{
  try {
      let result=axios.get("http://localhost:5000/restaurant/");
      return result;
  } catch (error) {
      console.log(error)
  }
});
// get restaurant by id
export const getrestoById=createAsyncThunk("restaurant/:id",async(id)=>{
  try {
      let result=axios.get(`http://localhost:5000/restaurant/${id}`);
      return result;
  } catch (error) {
      console.log(error)
  }
});
// get restaurant by type
export const getrestoByType=createAsyncThunk("restaurant/bytype/:type",async(type)=>{
    try {
        let result=axios.get(`http://localhost:5000/restaurant/bytype/${type}`);
        return result;
    } catch (error) {
        console.log(error)
    }
  });

//delete  resto
export const deleteresto =createAsyncThunk("restaurant/delete/:id",async(id)=>{
  try {
      let result=axios.delete(`http://localhost:5000/restaurant/delete/${id}`);
      return result;
  } catch (error) {
      console.log(error)
  }
});
//update resto
export const updateresto=createAsyncThunk("restaurant/update/:id",async({id,edited})=>{
  try {
    let result=axios.put(`http://localhost:5000/restaurant/update/${id}`,edited);
    return result;
  } catch (error) {
    console.log(error)
  }
});
const initialState = {
    resto: null,
    status: null,
}

export const RestoSlice = createSlice({
  name: 'resto',
  initialState,
  reducers: {},
  extraReducers: {
    //add a new resto
    [addResto.fulfilled]: (state,action) => {state.status="successe"
state.resto=action.payload.rests},
    [addResto.rejected]: (state) => {state.status="failed"},
    [addResto.pending]: (state) => {state.status="pending"},
    //get all resto
    [getallresto.fulfilled]: (state,action) => {state.status="successe";
  state.resto=action.payload.data?.rests},
    [getallresto.rejected]: (state) => {state.status="failed"},
    [getallresto.pending]: (state) => {state.status="pending" },
    //get rest by id
    [getrestoById.fulfilled]: (state,action) => {state.status="successe";
  state.resto=action.payload.data?.rests},
    [getrestoById.rejected]: (state) => {state.status="failed"},
    [getrestoById.pending]: (state) => {state.status="pending" },
    //getrestoByType
    [getrestoByType.fulfilled]: (state,action) => {state.status="successe";
  state.resto=action.payload.data?.rests},
    [getrestoByType.rejected]: (state) => {state.status="failed"},
    [getrestoByType.pending]: (state) => {state.status="pending" },
    //deleteresto
    [deleteresto.fulfilled]: (state) => {state.status="successe"},
    [deleteresto.rejected]: (state) => {state.status="failed"},
    [deleteresto.pending]: (state) => {state.status="pending"},
    //updateresto
    [updateresto.fulfilled]: (state,action) => {state.status="successe"
state.resto=action.payload.rests},
    [updateresto.rejected]: (state) => {state.status="failed"},
    [updateresto.pending]: (state) => {state.status="pending"},
  }

})



export default RestoSlice.reducer