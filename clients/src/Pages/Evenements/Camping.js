import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/Card';
import { getallEvent } from '../../redux/EventSlice';
import Comment from "../../component/commentaire/Comment"
import Listcommet from '../../component/commentaire/Listcommet';
const Camping = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEvent())
    
  }, []);
  var t=[]
  const events = useSelector((state) => state.event?.events);
  console.log(events)
  
  return (
    <div>
      {events?.map((el)=>el.Comments.map((x)=> <Listcommet comments={x} />))}
    {/*   <Comment x={"event"}id={"6339efa793ddf3cb4ee81dad"}  />
      { t=events.filter((eve) =>{eve._id.includes("6339efa793ddf3cb4ee81dad")})
      }
      <Listcommet comments={t[0].Comments}/> */}
      {events ? (
          events.filter((data)=>data.type.includes("camping"))
              .map((el, i) => <Card etab={el}  key={i} x={"event" }/>)
          ) :null}
    </div>)
}

export default Camping