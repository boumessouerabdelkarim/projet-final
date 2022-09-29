const express=require('express')
const etab = require('../models/etablissement');
const EtabRoute=express.Router()
const ObjectID = require("mongoose").Types.ObjectId;
//get all etab
EtabRoute.get('/',async(req,res)=>{
    try {let result=await etab.find()
        res.send({etabs:result,msg:'get all etab'})
    } catch (error) {
        res.status(400).send({msg:'error getting etab'})
  console.log(error)  
    }
})
//get etab by id
EtabRoute.get('/:id',async(req,res)=>{
    try {let result=await etab.findById(req.params.id);
        res.send({etabs:result,msg:'get all etab'})
    } catch (error) {
        res.status(400).send({msg:'error getting etab'})
  console.log(error)  }})
  //get etab by type
  EtabRoute.get('/bytype/:type',async(req,res)=>{
    try {let result=await etab.find({type:req.params.type});
        res.send({etabs:result,msg:'get all etab by type'});}
        catch (error) {
            res.status(400).send({msg:'error getting etab by type'})
            console.log(error)
            }})

//add(post)
EtabRoute.post('/add',async(req,res) => {
try {let newrest=new etab(req.body);
    let result=await newrest.save();
    res.send({etabs:result,msg:'add new etab'})
    
} catch (error) {
    res.status(400).send({msg:'error saving etab'});
    console.log(error)
}
})


//Update
EtabRoute.put('/update/:id',async(req,res)=>{
    try {
        let result = await etab.findOneAndUpdate(
          {
            _id: req.params.id,
          },
    
          { $set: { ...req.body } },
          {new:true} 
        );
        res.send({ etabs: result, msg: "etab updated" });
      } catch (error) {
        res.status(400).send({ msg: "can not modify the etab" });
        console.log(error);
      }
})


//delete
EtabRoute.delete('/delete/:id',async(req,res)=>{
    try {await etab.findByIdAndDelete(req.params.id);
    res.send({msg: 'successfully    deleted'});
    }      
     catch (error) { res.status(400).send({msg:'error deleting etab'});
     console.log(error)
        
    }
}
)
// comments
//ajouter un nouveau comment
EtabRoute.patch('/comment-etab/:id',  async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return  await etab.findByIdAndUpdate(
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
              .then((result) => res.send({etab:result}))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      } });
 
  //delete comment
EtabRoute.patch('/delete-comment-etab/:id', async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return  await etab.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            Comments: {
              _id: req.body.commentId,
            },
          },
        },
        { new: true })
              .then((result) => res.send({etab:result,msg:"comment supprimee"}))
              .catch((err) => res.status(500).send({ message: err }));
      } catch (err) {
          return res.status(400).send(err);
      }
  });


module.exports=EtabRoute
    