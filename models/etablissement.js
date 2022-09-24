const mongoose =require('mongoose')
const { isEmail } = require("validator");
const schema=mongoose.Schema
const etabschema=new schema(
    { type:{type:String, required: true},
    name:{type:String, required:true ,unique:true},
    email:{type:String, required:false, validator:[isEmail]},
    logo:{type:String, required:true,default:'../uplade/autre.jpg'},
    description:{type:String, required:false, minLength:50},
    adress:{type:String, required:true ,unique:true},
    events:{type:[String], required:false},
    photos:{type:[String], required:false},
    heure_ouverture:{type:String, required:false},
    notes:{type:[String], required:false},
    telephone: {type: String, required:false},
    administrative: {type:String, required:true,default:"admin"},
        
    },{timestamps:true}
)


const Etab =mongoose.model('Etab',etabschema)
module.exports = Etab