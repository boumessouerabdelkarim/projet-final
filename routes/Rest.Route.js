const express=require('express')
const rest = require('../models/restaurant');
const RestRoute=express.Router()
const ObjectID = require("mongoose").Types.ObjectId;
//get all restaurant
RestRoute.get('/',async(req,res)=>{
    try {let result=await rest.find()
        res.send({rests:result,msg:'get all rest'})
    } catch (error) {
        res.status(400).send({msg:'error getting rest'})
  console.log(error)  
    }
})
//get restaurant by id
RestRoute.get('/:id',async(req,res)=>{
    try {let result=await rest.findById(req.params.id);
        res.send({rests:result,msg:'get all rest'})
    } catch (error) {
        res.status(400).send({msg:'error getting rest'})
  console.log(error)  }})
  //get restaurant by type
  RestRoute.get('/bytype/:type',async(req,res)=>{
    try {let result=await rest.find({type:req.params.type});
        res.send({rests:result,msg:'get all rest by type'});}
        catch (error) {
            res.status(400).send({msg:'error getting rest by type'})
            console.log(error)
            }})

//add(post)
RestRoute.post('/add',async(req,res) => {
try {let newrest=new rest(req.body);
    let result=await newrest.save();
    res.send({rests:result,msg:'add new rest'})
    
} catch (error) {
    res.status(400).send({msg:'error saving rest'});
    console.log(error)
}
})


//Update
RestRoute.put('/update/:id',async(req,res)=>{
    try {
        let result = await rest.findOneAndUpdate(
          {
            _id: req.params.id,
          },
    
          { $set: { ...req.body } },
          {new:true} 
        );
        res.send({ rests: result, msg: "restaurant updated" });
      } catch (error) {
        res.status(400).send({ msg: "can not modify the restaurant" });
        console.log(error);
      }
})


//delete
RestRoute.delete('/delete/:id',async(req,res)=>{
    try {await rest.findByIdAndDelete(req.params.id);
    res.send({msg: 'successfully    deleted'});
    }      
     catch (error) { res.status(400).send({msg:'error deleting rest'});
     console.log(error)
        
    }
}
)
// comments
RestRoute.patch('/comment-rest/:id',  async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return  await rest.findByIdAndUpdate(
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
              .then((result) => res.send({rests:result}))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      } });
 
RestRoute.patch('/delete-comment-rest/:id', async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return  await rest.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            Comments: {
              _id: req.body.commentId,
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

module.exports=RestRoute
