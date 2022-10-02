import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
 // add a new etab
 export const addEtab = createAsyncThunk("etablissements/add", async ({etab}) => {
    try {
      let result = await axios.post("http://localhost:5000/etablissements/add", etab);
  
      return result.data;
    } catch (error) {
      console.log(error);
    }
  });
   //get all etabs
export const getallEtab=createAsyncThunk("etablissements/",async()=>{
  try {
      let result= await axios.get("http://localhost:5000/etablissements/");
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get etabs by id
export const getEtabById=createAsyncThunk("etablissements/:id",async(id)=>{
  try {
      let result=await axios.get(`http://localhost:5000/etablissements/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
// get etabs by type
export const getEtabByType=createAsyncThunk("etablissements/bytype/:type",async(type)=>{
    try {
        let result= await axios.get(`http://localhost:5000/etablissements/bytype/${type}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
  });

//delete hotel
export const deleteEtab =createAsyncThunk("etablissements/delete/:id",async(id)=>{
  try {
      let result=await axios.delete(`http://localhost:5000/etablissements/delete/${id}`);
      return result.data;
  } catch (error) {
      console.log(error)
  }
});
//update etab
export const updateEtab=createAsyncThunk("etablissements/update/:id",async({id,eta})=>{
  try {
    let result= await axios.put(`http://localhost:5000/etablissements/update/${id}`,eta);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
//add a new comment
export const AddCommentEtab=createAsyncThunk("etablissements/comment-etab/:id",async({id,comment})=>{
  try {
    let result= await axios.patch(`http://localhost:5000/etablissements/comment-etab/${id}`,comment);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
//delete comment
export const DeleteCommentEtab=createAsyncThunk("etablissements/delete-comment-etab/:id",async({id,Id_comment})=>{
  try {
    let result= await axios.patch(`http://localhost:5000/etablissements/delete-comment-etab/${id}`,Id_comment);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});
const initialState = {
   etabs: null,
    status: null,
    etab: null
}

export const EtabSlice = createSlice({
  name: 'etablissements',
  initialState,
  reducers: {},
  extraReducers: {
    //add a new etab
    [addEtab.fulfilled]: (state,action) => {state.status="successe"
state.etab=action.payload?.etabs},
    [addEtab.rejected]: (state) => {state.status="failed"},
    [addEtab.pending]: (state) => {state.status="pending"},
    //get all etab
    [getallEtab.fulfilled]: (state,action) => {state.status="successe";
  state.etabs=action.payload?.etabs},
    [getallEtab.rejected]: (state) => {state.status="failed"},
    [getallEtab.pending]: (state) => {state.status="pending" },
    //get etab by id
    [getEtabById.fulfilled]: (state,action) => {state.status="successe";
  state.etab=action.payload?.etabs},
    [getEtabById.rejected]: (state) => {state.status="failed"},
    [getEtabById.pending]: (state) => {state.status="pending" },
    //getEtabByType
    [getEtabByType.fulfilled]: (state,action) => {state.status="successe";
  state.etabs=action.payload?.etabs},
    [getEtabByType.rejected]: (state) => {state.status="failed"},
    [getEtabByType.pending]: (state) => {state.status="pending" },
    //delet Etab
    [deleteEtab.fulfilled]: (state) => {state.status="successe"},
    [deleteEtab.rejected]: (state) => {state.status="failed"},
    [deleteEtab.pending]: (state) => {state.status="pending"},
    //updateEtabs
    [updateEtab.fulfilled]: (state,action) => {state.status="successe"
state.etab=action.payload?.etabs},
    [updateEtab.rejected]: (state) => {state.status="failed"},
    [updateEtab.pending]: (state) => {state.status="pending"},
   //add a new comment
    [AddCommentEtab.fulfilled]: (state,action) => {state.status="successe"
    state.etab=action.payload?.etabs},
        [AddCommentEtab.rejected]: (state) => {state.status="failed"},
        [AddCommentEtab.pending]: (state) => {state.status="pending"},
 //delete comment 
 [DeleteCommentEtab.fulfilled]: (state) => {state.status="successe"},
    [DeleteCommentEtab.rejected]: (state) => {state.status="failed"},
    [DeleteCommentEtab.pending]: (state) => {state.status="pending"},
      }

})



export default EtabSlice.reducer