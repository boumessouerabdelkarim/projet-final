const ObjectID = require("mongoose").Types.ObjectId;
const User = require("../models/user");


// get all user
module.exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    // .select("-password");
    res.status(200).json(users);
  };
  
  //get user by id
  module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    User.findById(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknown : " + err);
    }).select("-password");
  };
  // update user 
  module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
     const result =await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            ...req.body
          }, 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
        // (err, docs) => {
        //   if (!err) return res.send(docs);
        //   if (err) return res.status(500).send({ message: err });
        // }
      );
      res.send(result)
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };


  //delete user
  
  module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await User.remove({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };