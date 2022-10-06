import React, { useEffect, useState } from "react";
import "./tab.css";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, getallEvent } from "../../redux/EventSlice";
import Card_etab from "../../component/Card_etab";
import ReactLoading from "react-loading";
import axios from "axios";

const G_events = () => {
  const [toggleState, setToggleState] = useState(1);
  const [n_event, setn_event] = useState(null);
  const [evn, setevn] = useState("all")
  const [file, setfile] = useState("")
  const uploadImg=async()=>{
    const form=new FormData();
    form.append('file', file);
    form.append('upload_preset',"bonplan")
  await axios.post('https://api.cloudinary.com/v1_1/dr8zd6kj2/upload',form)
  .then((result)=>{
      setn_event({...n_event,logo:result.data.secure_url})}).catch((err)=>console.log(err))
  
   }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEvent());
  }, []);
  const evenements = useSelector((state) => state.event.events);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <BsFillCalendarEventFill />
          Tous les evenements
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <IoIosAddCircleOutline /> ajouter event
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h1 className="title_etab">ALL EVENEMENTS</h1>
          <div className="filtre">
            <button
              type="button"
              className="myButton"
              onClick={() => setevn("all")}
            >
              Tous
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setevn("soiree")}
            >
              Soiree
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setevn("camping")}
            >
             Camping
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setevn("rondonnees")}
            >
              Rondonnees
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setevn("expositions")}
            >
             Expositions
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setevn("autre")}
            >
             Autre
            </button>
          </div>
          {evenements ? (
            evenements.filter((data) =>
            evn === "all" ? data : data.type.includes(evn)
          ).map((el, i) => (
              <Card_etab etab={el} x={"event"} key={i} />
            ))
          ) : (
            <h2 style={{ marginTop: 150 }}>
              <ReactLoading
                type={"spokes"}
                color={"blue"}
                height={50}
                width={50}
              />
            </h2>
          )}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>AJOUTER UN EVENEMENT</h2>
          <hr />
          <div className="modal_edit-body">
            <fieldset className="donnes_comm">
              <legend>Donnes principal:</legend>
              <label>name (*):</label>
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setn_event({ ...n_event, name: e.target.value })
                }
              />

              <div>
                <label>type (*):</label>
                <input
                  list="event"
                  onChange={(e) =>
                    setn_event({ ...n_event, type: e.target.value })
                  }
                />
                <datalist id="event">
                  <option value="soiree" />
                  <option value="camping" />
                  <option value="rondonnees" />
                  <option value="expositions" />
                  <option value="autre" />
                </datalist>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Date debut(*) :</label>
                    <input
                      type="date"
                      name="date"
                      onChange={(e) =>
                        setn_event({ ...n_event, date_debut: e.target.value })
                      }
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Date fin (*) :</label>
                    <input
                      type="date"
                      name="date"
                      onChange={(e) =>
                        setn_event({ ...n_event, date_fin: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <label> Logo :</label>
              <div style={{ display: "flex" }}>
                <input type="file" name="image"  onChange={(e)=>setfile(e.target.files[0])} />
                <input type="button" name="logo_uplaod" value="upload" className="add" onClick={()=>uploadImg()} />
              </div>

              <div style={{ display: "flex" }}>
                <label>Adress (*):</label>
                <input
                  list="ville"
                  style={{ width: "7rem" }}
                  name="ville"
                  placeholder="ville"
                  onChange={(e) =>
                    setn_event({ ...n_event, adress: {...n_event.adress,ville: e.target.value}} )
                  }
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
                  onChange={(e) =>
                    setn_event({ ...n_event, adress: {...n_event.adress,ville: e.target.value}} )
                  }
                />
              </div>
              <button id="add_event"  className="add" onClick={(e)=>{dispatch(addEvent(n_event))}}>
                
                <span> enregistrer</span>
              </button>
            </fieldset>
            <fieldset className="donnes_comm">
              <legend>Donnes secondaire:</legend>
              <label>prix (*):</label>
              <input
                type="text"
                name="prix"
                placeholder="exemple: a partir de 20 dinars "
                onChange={(e) =>
                  setn_event({ ...n_event, prix: e.target.value })
                }
              />
               <label>Organization (*):</label>
              <input
                type="text"
                name="organization"
                placeholder="exemple:club casino"
                onChange={(e) =>
                  setn_event({ ...n_event, organization: e.target.value })
                }
              />
              <label>Telephone:</label>
              <input type="text" name="telephone"  onChange={(e) =>
                  setn_event({ ...n_event, telephone: e.target.value })
                }/>
              
              <label> Lien facebook:</label>
              <input type="url" name="fb"onChange={(e) =>
                  setn_event({ ...n_event, facebook: e.target.value })
                } />

              <label>Description :</label>
              <textarea
                name="description"
                style={{ width: "80%", height: "100px" }}
                onChange={(e) =>
                  setn_event({ ...n_event, description: e.target.value })
                }
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default G_events;
