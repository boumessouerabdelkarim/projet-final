import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEtab } from "../redux/EtabSlice";
import { updateEvent } from "../redux/EventSlice";
import { updateHotel } from "../redux/HotelSlice";
import { updateresto } from "../redux/RestoSlice";
import "./modal_edit.css";



const Modal_edit = ({ setshow, show, x, el,sett,t}) => {
 
 console.log(el._id) 
 const [rest, setrest] = useState(el);
  const [etabs, setetabs] = useState(null);
  const [hot, sethot] = useState(null);
  const [even, seteven] = useState(null);
  const [file, setfile] = useState("")
  const uploadImg=async()=>{
    const form=new FormData();
    form.append('file', file);
    form.append('upload_preset',"bonplan")
  await axios.post('https://api.cloudinary.com/v1_1/dr8zd6kj2/upload',form)
  .then((result)=>{
    setrest({...rest,logo:result.data.secure_url})
    setetabs({...etabs,logo:result.data.secure_url})
    sethot({...hot,logo:result.data.secure_url})
      seteven({...even,logo:result.data.secure_url})}).catch((err)=>console.log(err))
  
   }
 const dispatch =useDispatch();
  return (
    <div className="modal_edit">
      <div className="modal_edit-content">
        <div className="modal-header">
          <span className="close_edit" onClick={() => setshow(!show)}>
            &times;
          </span>
          <h2>
            <span>Editer</span> <span>{el.name}</span>
          </h2>
        </div>
        <div className="modal_edit-body">
          <fieldset className="donnes_comm">
            <legend>Donnes principal:</legend>
            <label>name (*):</label>
            <input
              type="text"
              name="name"
              placeholder={el.name}
              onChange={(e) => {
                setrest({ ...rest, name: e.target.value });
                sethot({ ...hot, name: e.target.value });
                seteven({ ...even, name: e.target.value });
                setetabs({ ...etabs, name: e.target.value });
              }}
            />

            {x === "resto" ? (
              <div>
                <label>type(*) :</label>
                <input
                  list="resto"
                  placeholder={el.type}
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
                    placeholder={el.specialite}
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
                    placeholder={el.alcool}
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
                  placeholder={el.type}
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
                    placeholder={el.nb_etoile}
                    onChange={(e) => {
                      sethot({ ...hot, nb_etoile: e.target.value });
                    }}
                  />
                </div>
              </div>
            ) : x === "etab" ? (
              <div>
                <label>type (*) :</label>
                <input list="etab" placeholder={el.type} onChange={(e) => {
                    setetabs({ ...etabs, type: e.target.value });
                  }} />
                <datalist id="etab">
                  <option value="clubs" />
                  <option value="agence de voyage" />
                  <option value="musees" />
                  <option value="emplacement a visite" />
                </datalist>
                <div>
                  <label>Heure Ouverture :</label>{" "}
                  <input type="time" name="heure" onChange={(e) => {
                    sethot({ ...hot, heure_ouverture: e.target.value });
                  }} />
                </div>
              </div>
            ) : (
              <div>
                <label>type (*):</label>
                <input list="event" placeholder={el.type} onChange={(e) => {
                    seteven({ ...even, type: e.target.value });
                  }} />
                <datalist id="event">
                  <option value="soiree" />
                  <option value="camping" />
                  <option value="rondonnees" />
                  <option value="expositions" />
                  <option value="autre" />
                </datalist>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Date debut(*) :</label>{" "}
                    <input type="date" name="date"onChange={(e) => {
                    seteven({ ...even, date_debut: e.target.value });
                  }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Date fin (*) :</label>{" "}
                    <input type="date" name="date" onChange={(e) => {
                    seteven({ ...even, date_fin: e.target.value });
                  }} />
                  </div>
                </div>
              </div>
            )}

            <label> Logo :</label>
            <div style={{ display: "flex" }}>
            <input type="file" name="image" onChange={(e)=>setfile(e.target.files[0])}  />
              <input type="button" name="logo_uplaod" className="add" value="upload" onClick={()=>uploadImg()} />
            </div>

            <div style={{ display: "flex" }}>
              <label>Adress (*):</label>
              <input
                list="ville"
                style={{ width: "7rem" }}
                name="ville"
                placeholder={el.adress.ville}
                onChange={(e) => {
                  setrest({ ...rest,adress: {...rest.adress,ville: e.target.value} });
                  sethot({ ...hot, adress: {...hot.adress,ville: e.target.value} });
                  seteven({ ...even, adress: {...even.adress,ville: e.target.value}} );
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
              <input type="text" name="address" placeholder={el.adress.rue} onChange={(e) => {
                  setrest({ ...rest, adress: {...rest.adress,rue: e.target.value} });
                  sethot({ ...hot, adress: {...hot.adress,rue: e.target.value}});
                  seteven({ ...even, adress: {...even.adress,rue: e.target.value} });
                  setetabs({ ...etabs, adress: {...etabs.adress,rue: e.target.value}});
                }} />
            </div>
          </fieldset>
          <fieldset className="donnes_comm">
            <legend>Donnes secondaire:</legend>
            <label>Telephone:</label>
            <input type="text" name="telephone" placeholder={el.telephone}  onChange={(e) => {
                  setrest({ ...rest,telephone: e.target.value });
                  sethot({ ...hot,telephone: e.target.value });
                  seteven({ ...even,telephone: e.target.value });
                  setetabs({ ...etabs,telephone: e.target.value });
                }} />
            <label>Email:</label>
            <input type="email" name="email" placeholder={el.email}
            onChange={(e) => {
              setrest({ ...rest,email: e.target.value });
              sethot({ ...hot,email: e.target.value });
              seteven({ ...even,email: e.target.value });
              setetabs({ ...etabs,email: e.target.value });
            }} />
            <label>facebook:</label>
            <input type="url" name="fb" placeholder={el.facebook}
            onChange={(e) => {
              setrest({ ...rest,facebook: e.target.value });
              sethot({ ...hot,facebook: e.target.value });
              seteven({ ...even,facebook: e.target.value });
              setetabs({ ...etabs,facebook: e.target.value });
            }} />

            <label>Description :</label>
            <textarea
              name="description"
              placeholder={el.description}
              style={{ width: "80%", height: "100px" }}
              onChange={(e) => {
                setrest({ ...rest,description: e.target.value });
                sethot({ ...hot,description: e.target.value });
                seteven({ ...even,description: e.target.value });
                setetabs({ ...etabs,description: e.target.value });
              }}
            />
            <div className="update-etabs">
              <button id="annuler_updat" onClick={() => setshow(!show)}>
                Annuler
              </button>
              <button className="add" onClick={() => {switch (x) {
                case "resto":
                  dispatch(updateresto({id:el._id,res:rest}))
                  sett(!t)
                  setshow(!show)
                  break;
                  case "etab":
                  dispatch(updateEtab({id:el._id,eta:etabs}))
                  sett(!t)
                  setshow(!show)  
                  break;
                    case "hotel":
                  dispatch(updateHotel({id:el._id,hotel:hot}))
                  sett(!t)
                  setshow(!show)
                  break;
                  case "event":
                    dispatch(updateEvent({id:el._id,event:even}))
                    
                    setshow(!show)
                    sett(!t)
                    
                  break;
                
              }
                setshow(!show)}}> Sauvgarder</button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Modal_edit;
