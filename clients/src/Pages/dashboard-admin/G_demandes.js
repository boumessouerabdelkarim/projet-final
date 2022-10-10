import React, { useEffect, useState } from 'react'
import { AiTwotoneFileText } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Card_demmande from '../../component/Card_demmande';
import { getallDem } from '../../redux/DemSlice';
import { getuser } from '../../redux/UserSlice';

import './tab.css'

const G_demandes = () => {
  const [toggleState, setToggleState] = useState(1);
const [d, setd] = useState(false)
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallDem())
    dispatch(getuser())
    
  }, [d]);
  const dems = useSelector((state) => state.dem?.dems);
 
  
  return (
    <div className="container-tabs">
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
               <h1 className=" title_etab">LES DEMANDES D'AJOUT DES ETABLISSEMENT</h1>
               <div className="filtre_dem">
               {
    dems ?
    dems?.filter((data)=>data?.demande_type.includes("etablissement"))
    .map((data,i)=><Card_demmande setd={setd} d={d} dem={data}  key={i}/>):<h1>Aucun demendes pour l'instant</h1>
  }
</div>
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
               <h1 className=" title_etab">LES DEMANDES D'AJOUT DES EVENEMENTS</h1>
               <div className="filtre_dem">
               {
    dems ?
    dems?.filter((data)=>data?.demande_type.includes("evenement"))
    .map((data,i)=><Card_demmande setd={setd} d={d} dem={data} key={i}/>):<h1>Aucun demendes pour l'instant</h1>
  }</div>
      </div>

      
    </div>
  </div>
  )
}

export default G_demandes