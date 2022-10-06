import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEtab } from '../../redux/EtabSlice';

const Agence_voyage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEtab())
    
  }, []);
  const etabs = useSelector((state) => state.etab.etabs);
  return (
    <div>
    
      {etabs ? (
          etabs.filter((data)=>data.type.includes("agence de voyage" ))
              .map((el, i) => <Card etab={el}  key={i} x={"etab" }/>)
          ) :null}
    </div>)
}

export default Agence_voyage