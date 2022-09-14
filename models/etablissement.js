const mongoose =require('mongoose')
const schema=mongoose.Schema
const etabschema=new schema(
    { type:{type:String, required: true},
    name:{type:String, required:true},
    email:{type:String, required:false},
    logo:{type:String, required:true,default:'photo'},
    description:{type:String, required:false},
    adress:{type:String, required:true},
    events:{type:[String], required:false},
    photos:{type:[String], required:false},
    heure_ouverture:{type:String, required:false},
    notes:{type:[String], required:false},
    telephone: {type: String, required:false},
        
    }
)


const Etab =mongoose.model('Etab',etabschema)
module.exports = Etab