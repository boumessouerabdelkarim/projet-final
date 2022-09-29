const express = require("express");
const ObjectID = require("mongoose").Types.ObjectId;
const Event = require("../models/evenement");
const EventRoute = express.Router();

//get all events
EventRoute.get("/", async (req, res) => {
  try {
    let result = await Event.find();
    res.send({ Events: result, msg: "get all Event" });
  } catch (error) {
    res.status(400).send({ msg: "error getting Event" });
    console.log(error);
  }
});
//get event by id
EventRoute.get("/:id", async (req, res) => {
  try {
    let result = await Event.findById(req.params.id);
    res.send({ Events: result, msg: "get all Event" });
  } catch (error) {
    res.status(400).send({ msg: "error getting Event" });
    console.log(error);
  }
});
//get event by type
EventRoute.get("/events/:type", async (req, res) => {
  try {
    let result = await Event.find({ type: req.params.type });
    res.send({ Events: result, msg: "get all Event by type" });
  } catch (error) {
    res.status(400).send({ msg: "error getting Event by type" });
    console.log(error);
  }
});

//add(post)
EventRoute.post("/add", async (req, res) => {
  try {
    let newEvent = new Event(req.body);
    let result = await newEvent.save();
    res.send({ Events: result, msg: "add new Event" });
  } catch (error) {
    res.status(400).send({ msg: "error saving Event" });
    console.log(error);
  }
});

//Update
EventRoute.put("/update/:id", async (req, res) => {
  try {
    let result = await Event.findOneAndUpdate(
      {
        _id: req.params.id,
      },

      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ Events: result, msg: "event updated" });
  } catch (error) {
    res.status(400).send({ msg: "can not modify the event" });
    console.log(error);
  }
});

//delete
EventRoute.delete("/delete/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.send({ msg: "successfully    deleted" });
  } catch (error) {
    res.status(400).send({ msg: "error deleting Event" });
    console.log(error);
  }
});
// comments
EventRoute.patch("/comment-event/:id", async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return await Event.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          Comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            note: req.body.note,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true }
    )
      .then((result) => res.send({ event: result }))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
});
//supprimer comment
EventRoute.patch("/delete-comment-event/:id", async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return await Event.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          Comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true }
    )
      .then((result) => res.send({events:result,msg:"comment supprimee"}))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = EventRoute;
