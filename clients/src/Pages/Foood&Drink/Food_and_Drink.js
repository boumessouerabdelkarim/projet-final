import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Bar_search from '../../component/Bar_search'
import Card from '../../component/Card'
import { getallresto } from '../../redux/RestoSlice';

function Food_and_Drink() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallresto())
    
  }, []);
  const restaurant = useSelector((state) => state.resto.restos);
  return (
    <div>
      <Bar_search/>
      {restaurant ? (
            restaurant.filter((data)=>data.type.includes("restaurant"&&"fast food"&&"salon de the "))
              .map((el, i) => <Card etab={el}  key={i} x={"resto" }/>)
          ) :null}
    </div>
    
  )
}

export default Food_and_Drink