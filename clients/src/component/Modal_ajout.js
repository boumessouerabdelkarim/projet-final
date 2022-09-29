import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addResto }from '../redux/RestoSlice';
import {addEtab} from '../redux/EtabSlice';
import {addHotel} from '../redux/HotelSlice';
import "./modal_edit.css";
import axios from "axios";
const Modal_ajout = ({ setshow1, show1, x }) => {
 
 
 const [rest, setrest] = useState(null);
  const [etabs, setetabs] = useState(null);
  const [hot, sethot] = useState(null);
  const [file, setfile] = useState("")
  const uploadImg=async()=>{
    const form=new FormData();
    form.append('file', file);
    form.append('upload_preset',"bonplan")
  await axios.post('https://api.cloudinary.com/v1_1/dr8zd6kj2/upload',form)
  .then((result)=>{
    setrest({...rest,logo:result.data.secure_url})
    setetabs({...etabs,logo:result.data.secure_url})
    sethot({...hot,logo:result.data.secure_url})}).catch((err)=>console.log(err))
  
   }
 const dispatch =useDispatch();
  return (
    <div className="modal_edit">
      <div className="modal_edit-content">
        <div className="modal-header">
          <span className="close_edit" onClick={() => setshow1(!show1)}>
            &times;
          </span>
          <h2>
            <span>Ajouter</span> <span>{x}</span>
          </h2>
        </div>
        <div className="modal_edit-body">
          <fieldset className="donnes_comm">
            <legend>Donnes principal:</legend>
            <label>name (*):</label>
            <input
              type="text"
              name="name"
              
              onChange={(e) => {
                setrest({ ...rest, name: e.target.value });
                sethot({ ...hot, name: e.target.value });
               
                setetabs({ ...etabs, name: e.target.value });
              }}
            />

            {x === "resto" ? (
              <div>
                <label>type(*) :</label>
                <input
                  list="resto"
                  
                  onChange={(e) => {
                    setrest({ ...rest, type: e.target.value });
                  }}
                />
                <datalist id="resto">
                  <option value="restaurant" />
                  <option value="fast food" />
                  <option value="salon de the " />
                  <option value="lounges bars" />
                  <option value="beach bars" />
                  <option value="pool bars" />
                  <option value="boite de nuits" />
                </datalist>
                <div>
                  <label>Specialites (*):</label>{" "}
                  <input
                    list="specialite"
                    
                    onChange={(e) => {
                      setrest({ ...rest, specialite: e.target.value });
                    }}
                  />
                  <datalist id="specialite">
                    <option value="tunisienne" />
                    <option value="viande et grillade" />
                    <option value="pizza et sandwich" />
                    <option value="poissons et fruits de mer" />
                    <option value="italienne" />
                    <option value="crepes et gaufres" />
                  </datalist>
                </div>
                <div>
                  <label>Alcool (*):</label>{" "}
                  <input
                    list="alcool"
                    
                    onChange={(e) => {
                      setrest({ ...rest, alcool: e.target.value });
                    }}
                  />
                  <datalist id="alcool">
                    <option value="oui" />
                    <option value="non" />
                  </datalist>
                </div>
                <div>
                  <label>Heure Ouverture :</label>{" "}
                  <input
                    type="time"
                    name="heure"
                    onChange={(e) => {
                      setrest({ ...rest, heure_ouverture: e.target.value });
                    }}
                  />
                </div>
              </div>
            ) : x === "hotel" ? (
              <div>
                <label>type (*) :</label>
                <input
                  list="hotel"
                  
                  onChange={(e) => {
                    sethot({ ...hot, type: e.target.value });
                  }}
                />
                <datalist id="hotel">
                  <option value="grand hotel" />
                  <option value="hotel de ville" />
                  <option value="maison d'hote" />
                </datalist>
                <div>
                  <label>nombre d etoiles (*): </label>{" "}
                  <input
                    type="number"
                    name="nb_etoile"
                    min="1"
                    max="5"
                    
                    onChange={(e) => {
                      sethot({ ...hot, nb_etoile: e.target.value });
                    }}
                  />
                </div>
              </div>
            ) : x === "etab" ? (
              <div>
                <label>type (*) :</label>
                <input list="etab"  onChange={(e) => {
                    setetabs({ ...etabs, type: e.target.value });
                  }} />
                <datalist id="etab">
                  <option value="clubs" />
                  <option value="agence de voyage" />
                  <option value="musees" />
                  <option value="aire de pique nique" />
                </datalist>
                <div>
                  <label>Heure Ouverture :</label>{" "}
                  <input type="time" name="heure" onChange={(e) => {
                    sethot({ ...hot, heure_ouverture: e.target.value });
                  }} />
                </div>
              </div>
            ) :null}

            <label> Logo :</label>
            <div style={{ display: "flex" }}>
              <input type="file" name="image" onChange={(e)=>setfile(e.target.files[0])}  />
              <input type="button" name="logo_uplaod" value="upload" onClick={()=>uploadImg()} />
            </div>

            <div style={{ display: "flex" }}>
              <label>Adress (*):</label>
              <input
                list="ville"
                style={{ width: "7rem" }}
                name="ville"
                
                onChange={(e) => {
                  setrest({ ...rest,adress: {...rest.adress,ville: e.target.value} });
                  sethot({ ...hot, adress: {...hot.adress,ville: e.target.value} });
                 
                  setetabs({ ...etabs, adress: {...etabs.adress,ville: e.target.value}} );
                }}
              />
              <datalist id="ville">
                <option value="houmet souk" />
                <option value="midoun" />
                <option value="ajim" />
                <option value="gallala" />
                <option value="zonne toristique" />
              </datalist>
              <input type="text" name="address"  onChange={(e) => {
                  setrest({ ...rest, adress: {...rest.adress,rue: e.target.value} });
                  sethot({ ...hot, adress: {...hot.adress,rue: e.target.value}});
                 
                  setetabs({ ...etabs, adress: {...etabs.adress,rue: e.target.value}});
                }} />
            </div>
          </fieldset>
          <fieldset className="donnes_comm">
            <legend>Donnes secondaire:</legend>
            <label>Telephone:</label>
            <input type="text" name="telephone"   onChange={(e) => {
                  setrest({ ...rest,telephone: e.target.value });
                  sethot({ ...hot,telephone: e.target.value });
                 
                  setetabs({ ...etabs,telephone: e.target.value });
                }} />
            <label>Email:</label>
            <input type="email" name="email" 
            onChange={(e) => {
              setrest({ ...rest,email: e.target.value });
              sethot({ ...hot,email: e.target.value });
              
              setetabs({ ...etabs,email: e.target.value });
            }} />
            <label>facebook:</label>
            <input type="url" name="fb" 
            onChange={(e) => {
              setrest({ ...rest,facebook: e.target.value });
              sethot({ ...hot,facebook: e.target.value });
            
              setetabs({ ...etabs,facebook: e.target.value });
            }} />

            <label>Description :</label>
            <textarea
              name="description"
              
              style={{ width: "80%", height: "100px" }}
              onChange={(e) => {
                setrest({ ...rest,description: e.target.value });
                sethot({ ...hot,description: e.target.value });
            
                setetabs({ ...etabs,description: e.target.value });
              }}
            />
            <div className="update-etabs">
              <button id="annuler_updat" onClick={() => setshow1(!show1)}>
                Annuler
              </button>
              <button id="update_etab" onClick={() => {switch (x) {
                case "resto":
                    console.log(rest)
                  dispatch(addResto({resto:rest}))
                  break;
                  case "etab":
                  dispatch(addEtab({etab:etabs}))
                    break;
                    case "hotel":
                  dispatch(addHotel({hotel:hot}))
                  break;
                 
                
              }
                setshow1(!show1)}}> Sauvgarder</button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Modal_ajout;
