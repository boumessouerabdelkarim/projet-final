import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEvent } from '../../redux/EventSlice';

const Camping = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEvent())
    
  }, []);
  const events = useSelector((state) => state.event.events);
  return (
    <div>
    
      {events ? (
          events.filter((data)=>data.type.includes("camping"))
              .map((el, i) => <Card etab={el}  key={i} x={"event" }/>)
          ) :null}
    </div>)
}

export default Camping