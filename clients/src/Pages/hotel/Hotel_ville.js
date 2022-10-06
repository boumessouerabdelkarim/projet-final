import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallHotel } from '../../redux/HotelSlice';

const Hotel_ville = () => {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getallHotel())
    
  }, []);
  const hotel = useSelector((state) => state.hotel.hotels);
  return (
    <div>
      
      {hotel ? (
            hotel.filter((data)=>data.type.includes("maison d'hote"))
              .map((el, i) => <Card etab={el}  key={i} x={"hotel" }/>)
          ) :null}
    </div>
    
  )
}

export default Hotel_ville