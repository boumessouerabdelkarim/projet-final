import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDem } from "../redux/DemSlice";
import './modal_dem.css'
const Modal_dem = ({ x2 ,show2,setshow2}) => {
  const [dem, setdem] = useState(null)
  const current = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  return (
    <div className="modal_dem">
      <div className="modal_edit-content">
        <div className="modal-header">
          <span className="close_edit" onClick={() => setshow2(!show2)}>
            &times;
          </span>
          <h2>
            <span>Ajouter</span> <span>{x2}</span>
          </h2>
        </div>
        <div className="modal_edit-body"></div>
        {setdem({...dem,User_id:current._id})}
        <div className="cccc">
          <input type="text" placeholder="Nom" onChange={(e)=>setdem({...dem,name:e.target.value})} />
          <input type="text" placeholder="Prenom" onChange={(e)=>setdem({...dem,lastName:e.target.value})} />
        </div>
        <div className="cccc">
        <input type="email" placeholder="Email" onChange={(e)=>setdem({...dem,email:e.target.value})}  />
        <input type="text" placeholder="Telephone" onChange={(e)=>setdem({...dem,telephone:e.target.value})}  />
        </div>
        {(x2 === "etablissement") ? (
          <div>
            {setdem({...dem,demande_type:x2})}
             <div className="cccc">
            <input type="text" placeholder="Nom d'etablissement" onChange={(e)=>setdem({...dem,title:e.target.value})}  />
            <input list="resto" placeholder="categorie" onChange={(e)=>setdem({...dem,type:e.target.value})}  />
            <datalist id="resto">
              <option value="restaurant" />
              <option value="fast food" />
              <option value="salon de the " />
              <option value="lounges bars" />
              <option value="beach bars" />
              <option value="pool bars" />
              <option value="boite de nuits" />
            </datalist>
            </div>
            <div className="cccc">
            <input list="specialite" placeholder="specialite" onChange={(e)=>setdem({...dem,specialite:e.target.value})}  />
            <datalist id="specialite">
              <option value="tunisienne" />
              <option value="viande et grillade" />
              <option value="pizza et sandwich" />
              <option value="poissons et fruits de mer" />
              <option value="italienne" />
              <option value="crepes et gaufres" />
            </datalist>
            <input list="alcool" placeholder="Alcool"  onChange={(e)=>setdem({...dem,alcool:e.target.value})} />
            <datalist id="alcool">
              <option value="oui" />
              <option value="non" />
            </datalist>
            </div>
          </div>
        ) : (
          <div> 
              {setdem({...dem,demande_type:2})}
            <div class="cccc">
             <input type="text" placeholder="Nom d'etablissement" onChange={(e)=>setdem({...dem,title:e.target.value})}  />
            <input list="event" placeholder="type de l'evenement" onChange={(e)=>setdem({...dem,type:e.target.value})}  />
            <datalist id="event">
              <option value="soiree" />
              <option value="camping" />
              <option value="rondonnees" />
              <option value="expositions" />
              <option value="autre" />
            </datalist>
            </div>
            <div className="cccc">
              <input type="date" name="date" placeholder="date debut" onChange={(e)=>setdem({...dem,date_debut:e.target.value})}  />

              <input type="date" name="date" placeholder="date fin" onChange={(e)=>setdem({...dem,date_fin:e.target.value})}  />
            </div>
            <input type="url" placeholder="lien facebook"  onChange={(e)=>setdem({...dem,facebook:e.target.value})} />
          </div>
        )}
        
                
                <div className="cccc">
                
                <input
                  list="ville"
                  
                  name="ville"
                  placeholder="ville"
                  onChange={(e) => {
                    setdem({ ...dem,adress: {...dem.adress,ville: e.target.value} })}}
                />
                <datalist id="ville">
                  <option value="houmet souk" />
                  <option value="midoun" />
                  <option value="ajim" />
                  <option value="gallala" />
                  <option value="zonne toristique" />
                </datalist>
                <input
                  type="text"
                  name="address"
                  placeholder="exemple :21 rue mohmed badra"
                  onChange={(e) => {
                    setdem({ ...dem,adress: {...dem.adress,rue: e.target.value} })}}
                 
                />
            
              </div>
              <input type="text" className="inn" placeholder="prix ou budget" onChange={(e)=>setdem({...dem,prix:e.target.value})}/>
              <div className="bts_dem">
              <button id="add_dem" onClick={() => setshow2(!show2)}>
                Annuler
              </button>
              <button id="add_dem" onClick={() => { dispatch(addDem({dem:dem}));setshow2(!show2)}} > Sauvgarder</button>
              </div>
      </div>
     
    </div>
  );
};

export default Modal_dem;
