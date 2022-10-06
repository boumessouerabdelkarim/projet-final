import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallHotel } from '../../redux/HotelSlice';

const Grand_hotel = () => {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getallHotel())
    
  }, []);
  const hotel = useSelector((state) => state.hotel.hotels);
  return (
    <div>
      
      {hotel ? (
            hotel.filter((data)=>data.type.includes("grand hotel"))
              .map((el, i) => <Card etab={el}  key={i} x={"hotel" }/>)
          ) :null}
    </div>
    
  )
}

export default Grand_hotel