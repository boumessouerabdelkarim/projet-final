import React, { useState } from 'react'
import { AiTwotoneFileText } from 'react-icons/ai';
import Modal_dem from '../../component/Modal_dem';
import './tab.css'
const G_demandes_user = () => {
  
    const [toggleState, setToggleState] = useState(1);
    const [show2, setshow2] = useState(false);
    const [x2, setx2] = useState(null)
    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
      <div className="container-tabs">
         {
  show2&&(<Modal_dem setshow2={setshow2} show2={show2} x2={x2}/>)
}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         <AiTwotoneFileText/> D_etablissements
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         <AiTwotoneFileText/> D_evenements
        </button>
     
      </div>
  
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <button  className='add_etab' style={{height:"3rem",marginLeft:"30%"}} onClick={()=>{setshow2(!show2);
          setx2("etablissement")}}>ajouter une nouvelle demande</button>
        



        </div>
  
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
         <button className='add_etab' onClick={()=>{setshow2(!show2);
          setx2("evenement")}}
          style={{height:"3rem",marginLeft:"30%"}}>ajouter une nouvelle demande</button>




        </div>
  
        
      </div>
     
    </div>
    )
  }
  
  
  


export default G_demandes_user