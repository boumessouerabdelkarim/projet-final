import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Bar_search from '../../component/Bar_search';
import Card from '../../component/Card';
import { getallresto } from '../../redux/RestoSlice';

const Pool_bars = () => {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getallresto())
    
  }, []);
  const restaurant = useSelector((state) => state.resto.restos);
  return (
    <div>
      <Bar_search/>
      {restaurant ? (
            restaurant.filter((data)=>data.type.includes("pool bars"))
              .map((el, i) => <Card etab={el}  key={i} x={"resto" }/>)
          ) :null}
    </div>
    
  )
}

export default Pool_bars