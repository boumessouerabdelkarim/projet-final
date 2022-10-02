import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
 // add a newhotel
 export const addHotel = createAsyncThunk("hotels/add", async ({hotel}) => {
    try {
      let result = await axios.post("http://localhost:5000/hotels/add", hotel);
  
      return result.data;
    } catch (error) {
      console.log(error);
    }
  });
   //get all Hotels
export const getallHotel=createAsyncThunk("hotels/",async()=>{
  try {
      let result= await axios.get("http://localhost:5000/hotels/");
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get hotels by id
export const getHotelById=createAsyncThunk("hotels/:id",async(id)=>{
  try {
      let result=await axios.get(`http://localhost:5000/hotels/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get hotels by type
export const getHotelByType=createAsyncThunk("hotels/bytype/:type",async(type)=>{
    try {
        let result=await axios.get(`http://localhost:5000/hotels/bytype/${type}`);
        return result;
    } catch (error) {
        console.log(error)
    }
  });

//delete hotel
export const deleteHotel =createAsyncThunk("hotels/delete/:id",async(id)=>{
  try {
      let result=axios.delete(`http://localhost:5000/hotels/delete/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
//update hotel
export const updateHotel=createAsyncThunk("hotels/update/:id",async({id,hotel})=>{
  try {
    let result= await axios.put(`http://localhost:5000/hotels/update/${id}`,hotel);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
//add a new comment
export const AddCommentHotel=createAsyncThunk("hotels/comment-hotel/:id",async({id,comment})=>{
  try {
    let result= await axios.patch(`http://localhost:5000/hotels/comment-hotel/${id}`,comment);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
//delete comment
export const DeleteCommentHotel=createAsyncThunk("hotels/delete-comment-hotel/:id",async({id,Id_comment})=>{
  try {
    let result= await axios.patch(`http://localhost:5000/hotels/delete-comment-hotel/${id}`,Id_comment);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
const initialState = {
   hotels: null,
    status: null,
    hotel:null
}

export const HotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
  extraReducers: {
    //add a newhotel
    [addHotel.fulfilled]: (state,action) => {state.status="successe"
state.hotel=action.payload.hotels},
    [addHotel.rejected]: (state) => {state.status="failed"},
    [addHotel.pending]: (state) => {state.status="pending"},
    //get allhotel
    [getallHotel.fulfilled]: (state,action) => {state.status="successe";
  state.hotels=action.payload?.hotels},
    [getallHotel.rejected]: (state) => {state.status="failed"},
    [getallHotel.pending]: (state) => {state.status="pending" },
    //get rest by id
    [getHotelById.fulfilled]: (state,action) => {state.status="successe";
  state.hotel=action.payload?.hotels},
    [getHotelById.rejected]: (state) => {state.status="failed"},
    [getHotelById.pending]: (state) => {state.status="pending" },
    //getHotelByType
    [getHotelByType.fulfilled]: (state,action) => {state.status="successe";
  state.hotels=action.payload?.hotels},
    [getHotelByType.rejected]: (state) => {state.status="failed"},
    [getHotelByType.pending]: (state) => {state.status="pending" },
    //deleteHotel
    [deleteHotel.fulfilled]: (state) => {state.status="successe"},
    [deleteHotel.rejected]: (state) => {state.status="failed"},
    [deleteHotel.pending]: (state) => {state.status="pending"},
    //updateHotels
    [updateHotel.fulfilled]: (state,action) => {state.status="successe"
state.hotel=action.payload?.hotels
},
    [updateHotel.rejected]: (state) => {state.status="failed"},
    [updateHotel.pending]: (state) => {state.status="pending"},
   //add a new comment
   [AddCommentHotel.fulfilled]: (state,action) => {state.status="successe"
   state.hotel=action.payload?.hotels},
       [AddCommentHotel.rejected]: (state) => {state.status="failed"},
       [AddCommentHotel.pending]: (state) => {state.status="pending"},
//delete comment 
[DeleteCommentHotel.fulfilled]: (state) => {state.status="successe"},
   [DeleteCommentHotel.rejected]: (state) => {state.status="failed"},
   [DeleteCommentHotel.pending]: (state) => {state.status="pending"},
    
  }

})



export default HotelSlice.reducer