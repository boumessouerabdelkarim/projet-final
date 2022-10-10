const express=require('express')
const hotel = require('../models/hotel');
const HotelRoute=express.Router()
const ObjectID = require("mongoose").Types.ObjectId;
//get all hotel
HotelRoute.get('/',async(req,res)=>{
    try {let result=await hotel.find()
        res.send({hotels:result,msg:'get all hotel'})
    } catch (error) {
        res.status(400).send({msg:'error getting hotel'})
  console.log(error)  
    }
})
//get hotel by id
HotelRoute.get('/:id',async(req,res)=>{
    try {let result=await hotel.findById(req.params.id);
        res.send({hotels:result,msg:'get all hotel'})
    } catch (error) {
        res.status(400).send({msg:'error getting hotel'})
  console.log(error)  }})
  //get hotel by type
  HotelRoute.get('/bytype/:type',async(req,res)=>{
    try {let result=await hotel.find({type:req.params.type});
        res.send({hotels:result,msg:'get all hotel by type'});}
        catch (error) {
            res.status(400).send({msg:'error getting hotel by type'})
            console.log(error)
            }})

//add(post)
HotelRoute.post('/add',async(req,res) => {
try {let newrest=new hotel(req.body);
    let result=await newrest.save();
    res.send({hotels:result,msg:'add new hotel'})
    
} catch (error) {
    res.status(400).send({msg:'error saving hotel'});
    console.log(error)
}
})


//Update
HotelRoute.put('/update/:id',async(req,res)=>{
    try {
        let result = await hotel.findOneAndUpdate(
          {
            _id: req.params.id,
          },
    
          { $set: { ...req.body } },
          {new:true} 
        );
        res.send({ hotels: result, msg: "hotel updated" });
      } catch (error) {
        res.status(400).send({ msg: "can not modify the hotel" });
        console.log(error);
      }
})


//delete
HotelRoute.delete('/delete/:id',async(req,res)=>{
    try {await hotel.findByIdAndDelete(req.params.id);
    res.send({msg: 'successfully    deleted'});
    }      
     catch (error) { res.status(400).send({msg:'error deleting hotel'});
     console.log(error)
        
    }
}
)

// comments
HotelRoute.patch('/comment-hotel/:id',  async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return  await hotel.findByIdAndUpdate(
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
        { new: true })
              .then((result) => res.send({hotels:result}))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      } });

HotelRoute.patch('/delete-comment-hotel/:id', async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return  await hotel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            Comments: {
              _id: req.body.Id_comment,
            },
          },
        },
        { new: true })
              .then((data) => res.send(data))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      }
  });


module.exports=HotelRoute