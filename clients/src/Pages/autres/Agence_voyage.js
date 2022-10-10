import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEtab } from '../../redux/EtabSlice';
import "../accuiel.css"
const Agence_voyage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEtab())
    
  }, []);
  const etabs = useSelector((state) => state.etab.etabs);
  return (
    <div>
      <div className="desc_site">
    <h1>Les meilleures agence de voyage djerba</h1>
        <p>
          Vous aimez decouvrir les belles endroits 
          de la belle ile de
          Djerba mais vous avez besion d'une visite guidee .
        </p>
        <p>
          Kharja est le guide des sorties en Djerba. La plateforme regroupe en
          un seul site les meilleurs agences de voyage de Djerba, le site vous offre<br/>
          toutes ces informations de manière simple afin de pouvoir répondre à
          tous vos besoins en matière de sortie ou de voyage sans <br/>avoir à
          chercher un autre site.
        </p>
        </div>
      {etabs ? (
          etabs.filter((data)=>data.type.includes("agence de voyage" ))
              .map((el, i) => <Card etab={el}  key={i} x={"etab" }/>)
          ) :null}
    </div>)
}

export default Agence_voyage