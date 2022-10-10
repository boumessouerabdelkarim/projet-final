const express=require('express')
const dem = require('../models/demande');
const DemRoute=express.Router()
const ObjectID = require("mongoose").Types.ObjectId;
//get all dem
DemRoute.get('/',async(req,res)=>{
    try {let result=await dem.find()
        res.send({dems:result,msg:'get all dem'})
    } catch (error) {
        res.status(400).send({msg:'error getting dem'})
  console.log(error)  
    }
})
//get dem by id
DemRoute.get('/:id',async(req,res)=>{
    try {let result=await dem.findById(req.params.id);
        res.send({dems:result,msg:'get all dem'})
    } catch (error) {
        res.status(400).send({msg:'error getting dem'})
  console.log(error)  }})
  //get dem by type
  DemRoute.get('/dems/:type',async(req,res)=>{
    try {let result=await dem.find({demande_type:req.params.demande_type});
        res.send({dems:result,msg:'get all dem by type'});}
        catch (error) {
            res.status(400).send({msg:'error getting dem by type'})
            console.log(error)
            }})

//add(post)
DemRoute.post('/add',async(req,res) => {
  console.log(req.body)
try {let newrest=new dem(req.body);
    let result=await newrest.save();
    res.send({dems:result,msg:'add new dem'})
    
} catch (error) {
    res.status(400).send({msg:'error saving dem'});
    console.log(error)
}
})


//Update
DemRoute.put('/update/:id',async(req,res)=>{
    try {
        let result = await dem.findOneAndUpdate(
          {
            _id: req.params.id,
          },
    
          { $set: { ...req.body } },
          {new:true} 
        );
        res.send({ dems: result, msg: "dem updated" });
      } catch (error) {
        res.status(400).send({ msg: "can not modify the dem" });
        console.log(error);
      }
})
//valide command
DemRoute.put('/update/valid/:id',async(req,res)=>{
    try {
        let result = await dem.findOneAndUpdate(
          {
            _id: req.params.id,
          },
    
          { $set: { valide:true } },
          {new:true} 
        );
        res.send({ dems: result, msg: "dem updated" });
      } catch (error) {
        res.status(400).send({ msg: "can not modify the dem" });
        console.log(error);
      }
})


//delete
DemRoute.delete('/delete/:id',async(req,res)=>{
    try {await dem.findByIdAndDelete(req.params.id);
    res.send({msg: 'successfully    deleted'});
    }      
     catch (error) { res.status(400).send({msg:'error deleting dem'});
     console.log(error)
        
    }
})
module.exports=DemRoute