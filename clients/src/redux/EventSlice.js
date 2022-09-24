import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
 // add a new events
 export const addEvent = createAsyncThunk("evenements/add", async (events) => {
    try {
      let result = await axios.post("http://localhost:5000/evenements/add", events);
  
      return result;
    } catch (error) {
      console.log(error);
    }
  });
   //get all events
export const getallEvent=createAsyncThunk("evenements/",async()=>{
  try {
      let result=axios.get("http://localhost:5000/evenements/");
      return result;
  } catch (error) {
      console.log(error)
  }
});
// get evenements by id
export const getEventById=createAsyncThunk("evenements/:id",async(id)=>{
  try {
      let result=axios.get(`http://localhost:5000/evenements/${id}`);
      return result;
  } catch (error) {
      console.log(error)
  }
});
// get evenements by type
export const getEventByType=createAsyncThunk("evenements/events/:type",async(type)=>{
    try {
        let result=axios.get(`http://localhost:5000/evenements/events/${type}`);
        return result;
    } catch (error) {
        console.log(error)
    }
  });

//delete event
export const deleteEvent =createAsyncThunk("evenements/delete/:id",async(id)=>{
  try {
      let result=axios.delete(`http://localhost:5000/evenements/delete/${id}`);
      return result;
  } catch (error) {
      console.log(error)
  }
});
//update event
export const updateEvent=createAsyncThunk("evenements/update/:id",async({id,edited})=>{
  try {
    let result=axios.put(`http://localhost:5000/evenements/update/${id}`,edited);
    return result;
  } catch (error) {
    console.log(error)
  }
});
const initialState = {
    events: null,
    status: null,
}

export const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: {
    //add a new events
    [addEvent.fulfilled]: (state,action) => {state.status="successe"
state.events=action.payload.Events},
    [addEvent.rejected]: (state) => {state.status="failed"},
    [addEvent.pending]: (state) => {state.status="pending"},
    //get all events
    [getallEvent.fulfilled]: (state,action) => {state.status="successe";
  state.events=action.payload.data?.Events},
    [getallEvent.rejected]: (state) => {state.status="failed"},
    [getallEvent.pending]: (state) => {state.status="pending" },
    //get rest by id
    [getEventById.fulfilled]: (state,action) => {state.status="successe";
  state.events=action.payload.data?.Events},
    [getEventById.rejected]: (state) => {state.status="failed"},
    [getEventById.pending]: (state) => {state.status="pending" },
    //getEventByType
    [getEventByType.fulfilled]: (state,action) => {state.status="successe";
  state.events=action.payload.data?.Events},
    [getEventByType.rejected]: (state) => {state.status="failed"},
    [getEventByType.pending]: (state) => {state.status="pending" },
    //deleteEvent
    [deleteEvent.fulfilled]: (state) => {state.status="successe"},
    [deleteEvent.rejected]: (state) => {state.status="failed"},
    [deleteEvent.pending]: (state) => {state.status="pending"},
    //updateevents
    [updateEvent.fulfilled]: (state,action) => {state.status="successe"
state.events=action.payload.Events},
    [updateEvent.rejected]: (state) => {state.status="failed"},
    [updateEvent.pending]: (state) => {state.status="pending"},
  }

})



export default EventSlice.reducer