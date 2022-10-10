import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEtab } from '../../redux/EtabSlice';
import "../accuiel.css"
const Aire_pique_nique = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEtab())
    
  }, []);
  const etabs = useSelector((state) => state.etab.etabs);
  return (
    <div>
    <div className="desc_site">
        <h1>Les endroits à visiter djerba</h1>
        <p>
          Vous aimez decouvrir les belles endroits et  les meilleures choses à faire et à voir dans la belle ile de
          Djerba mais vous ne savez pas où aller ?
        </p>
        <p>
          Kharja est le guide des sorties en Djerba. La plateforme regroupe en
          un seul site les meilleurs endroits à visiter en Djerba, le site vous offre<br/>
          toutes ces informations de manière simple afin de pouvoir répondre à
          tous vos besoins en matière de sortie ou de voyage sans <br/>avoir à
          chercher un autre site.
        </p>
        </div>
      {etabs ? (
          etabs.filter((data)=>data.type.includes("emplacement a visite"))
              .map((el, i) => <Card  etab={el}  key={i} x={"etab" }/>)
          ) :null}
    </div>)
}

export default Aire_pique_nique