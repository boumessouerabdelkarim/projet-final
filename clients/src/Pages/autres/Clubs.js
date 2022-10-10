import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEtab } from '../../redux/EtabSlice';
import "../accuiel.css"
const Clubs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEtab())
    
  }, []);
  const etabs = useSelector((state) => state.etab.etabs);
  return (
    <div>
     <div className="desc_site">
        <h1>Les clubs de djerba</h1>
        <p>
          Vous aimez decouvrir les activites existants dans la belle ile de
          Djerba mais vous ne savez pas où aller ?
        </p>
        <p>
          Kharja est le guide des sorties en Djerba. La plateforme regroupe en
          un seul site les meilleurs clubs de Djerba, le site vous offre<br/>
          toutes ces informations de manière simple afin de pouvoir répondre à
          tous vos besoins en matière de sortie ou de voyage sans <br/>avoir à
          chercher un autre site.
        </p>
      </div>
      {etabs ? (
          etabs.filter((data)=>data.type.includes("club" ))
              .map((el, i) => <Card etab={el}  key={i} x={"etab" }/>)
          ) :null}
    </div>)
}

export default Clubs