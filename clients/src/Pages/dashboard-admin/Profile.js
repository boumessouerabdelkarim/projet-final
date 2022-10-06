import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateuser } from "../../redux/UserSlice";
import './profile.css';
const Profile = () => {
  const current = useSelector((state) => state.user?.user);
  console.log(current)
 const [upd, setupd] = useState(null)
 const [file, setfile] = useState("")
 const dispatch = useDispatch();
 //fonction ajouter image
 const uploadImg=async()=>{
  const form=new FormData();
  form.append('file', file);
  form.append('upload_preset',"bonplan")
await axios.post('https://api.cloudinary.com/v1_1/dr8zd6kj2/upload',form)
.then((result)=>setupd({...upd,photo:result.data.secure_url})).catch((err)=>console.log(err))

 }
 //https://api.cloudinary.com/v1_1/
 //dr8zd6kj2
 //bonplan
  return (
    <div className="g-profile">
      <h1>PROFILE</h1>
      <h3>Informations personnelles</h3>
      <div className="info_perso">
        <div className="info_per">
          <label>Nom :</label>
          <input type="text" value={current.name} onChange={(e)=>setupd({...upd,name:e.target.value})}/>
        </div>
        <div className="info_per">
          <label>Prenom :</label>
          <input type="text" value={current.lastName}onChange={(e)=>setupd({...upd,lastName:e.target.value})} />
        </div>
        <div className="info_per">
          <label>Email :</label>
          <input type="email" value={current.email} onChange={(e)=>setupd({...upd,email:e.target.value})}/>
        </div>
        <div className="info_per">
          <label>Mot de passe:</label>
          <input type="password" value={current.password} onChange={(e)=>setupd({...upd,password:e.target.value})} />
        </div>

        <h3>Image de profile :</h3>
        <div className="info_per up ">
          <img src={current.photo} alt="img_profile" />
         <div className="upload_img">
            <input type="file"   accept=".jpg, .jpeg, .png"  onChange={(e)=>setfile(e.target.files[0])}/>
            <button onClick={()=>uploadImg()}>upload</button> 
          </div> 
         
        </div>
      </div>
      <h3>Donnes secondaire</h3>
      <div className="info_second">
      <label id="cc">Adresse :</label>
        <div className="info_per">
          
          <>
            <label>Ville :</label>
            <input type="text" value={current.adress?.ville}
            onChange={(e)=> setupd({ ...upd, adress: {...upd.adress,ville: e.target.value} })} />
          </>
          <>
            <label>Rue :</label>
            <input type="text" value={current.adress?.rue} 
             onChange={ (e)=>setupd({ ...upd, adress: {...upd.adress,rue: e.target.value} })}/>
          </>
        </div>
        <div className="info_per">
          <label>Fb profile :</label>
          <input type="url" value={current.facebook} onChange={(e)=>setupd({...upd,facebook:e.target.value})} />
        </div>
        <div className="info_per">
          <label>Telephone :</label>
          <input type="text" value={current.telephone} onChange={(e)=>setupd({...upd,telephone:e.target.value})} />
        </div>
        <button className="upp" onClick={()=>dispatch(updateuser({id:current._id,edited:upd}))}>Update profile</button>
      </div>
    </div>
  );
};

export default Profile;
