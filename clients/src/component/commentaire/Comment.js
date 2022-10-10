import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { AddCommentEtab } from "../../redux/EtabSlice";
import { AddCommentEvent } from "../../redux/EventSlice";
import { AddCommentHotel } from "../../redux/HotelSlice";
import { AddCommentResto } from "../../redux/RestoSlice";
import "./comment.css";
const Comment = ({ x, id, sett, t }) => {
  const [rating, setRating] = useState(0);
  const [comm, setcomm] = useState({});
  const dispatch = useDispatch();
  const current = useSelector((state) => state.user?.user);
  console.log(current?._id);
  const pseudo = `${current?.name}  ${current?.lastName}`;
  const handleRating = (rate) => {
    setRating(rate);

    setcomm({ ...comm, commenterPseudo: pseudo });
  };
  const isAuth = localStorage.getItem("token");

  return (
    <div className="comment">
      {isAuth ? (
        <>
          <h3>Écrire un avis</h3>
          <Rating className="rate" onClick={handleRating} />
          <h3>Avis</h3>
          <textarea
            name="avis"
            cols="30"
            rows="10"
            placeholder="Ecrivez votre avis ici..."
            onChange={(e) => setcomm({ ...comm, text: e.target.value })}
          ></textarea>
          <button
            className="add_avis"
            onClick={() => {
              switch (x) {
                case "resto":
                  dispatch(
                    AddCommentResto({
                      id: id,
                      comment: {
                        ...comm,
                        commenterId: current._id,
                        note: rating,
                      },
                    })
                  );
                  sett(!t);
                  break;
                case "etab":
                  dispatch(
                    AddCommentEtab({
                      id: id,
                      comment: {
                        ...comm,
                        commenterId: current._id,
                        note: rating,
                      },
                    })
                  );
                  sett(!t);
                  break;
                case "hotel":
                  dispatch(
                    AddCommentHotel({
                      id: id,
                      comment: {
                        ...comm,
                        commenterId: current._id,
                        note: rating,
                      },
                    })
                  );
                  sett(!t);
                  break;

                case "event":
                  dispatch(
                    AddCommentEvent({
                      id: id,
                      comment: {
                        ...comm,
                        commenterId: current._id,
                        note: rating,
                      },
                    })
                  );
                  sett(!t);
                  break;
              }
            }}
          >
            Publier votre avis
          </button>
        </>
      ) : (
        <h3>Vous devez être connecté pour ajouter un commentaire.</h3>
      )}
    </div>
  );
};

export default Comment;
