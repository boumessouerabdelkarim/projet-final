import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEtab } from '../../redux/EtabSlice';
import "../accuiel.css"
function Autre() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEtab())
    
  }, []);
  const etabs = useSelector((state) => state.etab.etabs);
  return (
    <div>
    <div className="desc_site">
        <h1>Les bons plans activites et endroits à vister en djerba</h1>
        <p>Vous aimez passer une belle sejour à Djerba mais vous ne savez pas où aller ?</p>
        <p>Kharja vous propose les meilleurs endroits à visiter et les activites à faire pour passer des belles moments à djerba.</p>
      </div>
      {etabs ? (
          etabs
              .map((el, i) => <Card  etab={el}  key={i} x={"etab" }/>)
          ) :null}
    </div>)
}

export default Autre