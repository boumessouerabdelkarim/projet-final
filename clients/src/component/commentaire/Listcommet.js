import React from "react";
import "./comment.css";
import { Rating } from "react-simple-star-rating";
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { DeleteCommentEtab } from "../../redux/EtabSlice";
import { DeleteCommentResto } from "../../redux/RestoSlice";
import { DeleteCommentHotel } from "../../redux/HotelSlice";
import { DeleteCommentEvent } from "../../redux/EventSlice";

const Listcommet = ({ comments,id,type,sett,t }) => {
  const dispatch= useDispatch()
  const current = useSelector((state) => state.user?.user);
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <div  style={{ display: "flex", flexDirection: "column" }}>
      <div className="com_info">
        <h4 id="ggg">{formatDate(comments?.timestamp)}</h4>
        <h1 id="nom">{comments?.commenterPseudo}</h1>
{current?.is_admin?<button id='supp_comment' onClick={()=>{
  switch (type) {
    case "resto":
    dispatch(DeleteCommentResto({id:id,Id_comment:comments._id}))
      sett(!t);
      break;
    case "etab":
      dispatch(DeleteCommentEtab({id:id,Id_comment:comments._id}))
      sett(!t);
      break;
    case "hotel":
      dispatch(DeleteCommentHotel({id:id,Id_comment:comments._id}))
      sett(!t);
      break;

    case "event":
      dispatch(DeleteCommentEvent({id:id,Id_comment:comments._id}))
      sett(!t);
      break;
  }

}}><AiFillDelete/></button>:null}
        <h3>
          Note:
          <Rating
            className="rate"
            initialValue={comments?.note}
            readonly={true}
          />
        </h3>
        <p id="ppp">{comments?.text}</p>
      </div>
      ;
    </div>
  );
};

export default Listcommet;
