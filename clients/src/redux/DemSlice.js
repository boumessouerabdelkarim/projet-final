import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
 // add a new dem s
 export const addDem = createAsyncThunk("demandes/add", async (dem s) => {
    try {
      let result = await axios.post("http://localhost:5000/demandes/add", dem s);
  
      return result.data;
    } catch (error) {
      console.log(error);
    }
  });
   //get all dem s
export const getallDem=createAsyncThunk("demandes/",async()=>{
  try {
      let result=await axios.get("http://localhost:5000/demandes/");
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get demandes by id
export const getDemById=createAsyncThunk("demandes/:id",async(id)=>{
  try {
      let result= await axios.get(`http://localhost:5000/demandes/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get demandes by type
export const getDemByType=createAsyncThunk("demandes/dems/:type",async(type)=>{
    try {
        let result=await axios.get(`http://localhost:5000/demandes/dems/${type}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
  });

//delete dem 
export const deleteDem =createAsyncThunk("demandes/delete/:id",async(id)=>{
  try {
      let result= await axios.delete(`http://localhost:5000/demandes/delete/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
//update dem 
export const updateDem=createAsyncThunk("demandes/update/:id",async({id,dem })=>{
  try {
    let result=await axios.put(`http://localhost:5000/demandes/update/${id}`,dem );
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
export const validDem=createAsyncThunk("demandes/update/:id",async({id })=>{
    try {
      let result=await axios.put(`http://localhost:5000/demandes/update/valid/${id}` );
      return result.data;
    } catch (error) {
      console.log(error)
    }
  });
const initialState = {
    dems: null,
    status: null,
    dem :null
}

export const DemSlice = createSlice({
  name: 'demandes',
  initialState,
  reducers: {},
  extraReducers: {
    //add a new demande
    [addDem.fulfilled]: (state,action) => {state.status="successe"
state.dem =action.payload?.dems},
    [addDem.rejected]: (state) => {state.status="failed"},
    [addDem.pending]: (state) => {state.status="pending"},
    //get all demandes
    [getallDem.fulfilled]: (state,action) => {state.status="successe";
  state.dems=action.payload?.dems},
    [getallDem.rejected]: (state) => {state.status="failed"},
    [getallDem.pending]: (state) => {state.status="pending" },
    //get dem by id
    [getDemById.fulfilled]: (state,action) => {state.status="successe";
  state.dem =action.payload?.dems},
    [getDemById.rejected]: (state) => {state.status="failed"},
    [getDemById.pending]: (state) => {state.status="pending" },
    //getDemByType
    [getDemByType.fulfilled]: (state,action) => {state.status="successe";
  state.dems=action.payload?.dems},
    [getDemByType.rejected]: (state) => {state.status="failed"},
    [getDemByType.pending]: (state) => {state.status="pending" },
    //delete demandes
    [deleteDem.fulfilled]: (state) => {state.status="successe"},
    [deleteDem.rejected]: (state) => {state.status="failed"},
    [deleteDem.pending]: (state) => {state.status="pending"},
    //updateDems
    [updateDem.fulfilled]: (state,action) => {state.status="successe"
state.dem =action.payload.dems},
    [updateDem.rejected]: (state) => {state.status="failed"},
    [updateDem.pending]: (state) => {state.status="pending"},
    //valide demand
    [validDem.fulfilled]: (state,action) => {state.status="successe"
state.dem =action.payload.dems},
    [validDem.rejected]: (state) => {state.status="failed"},
    [validDem.pending]: (state) => {state.status="pending"},
  }

})



export default DemSlice.reducer