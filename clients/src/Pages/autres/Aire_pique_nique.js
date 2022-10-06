import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEtab } from '../../redux/EtabSlice';

const Aire_pique_nique = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEtab())
    
  }, []);
  const etabs = useSelector((state) => state.etab.etabs);
  return (
    <div>
    
      {etabs ? (
          etabs.filter((data)=>data.type.includes("emplacement a visite"))
              .map((el, i) => <Card  etab={el}  key={i} x={"etab" }/>)
          ) :null}
    </div>)
}

export default Aire_pique_nique