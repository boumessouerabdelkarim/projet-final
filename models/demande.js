const mongoose =require('mongoose')

const schema=mongoose.Schema
const demandeschema=new schema(
    {User_id:{type:String, required:true},
        name:{type:String, required:true},
    lastName:{type:String, required:true},
    Email:{type:String, required:true},
    demande_type:{type:String, required:true},
    title:{type:String, required:true},
    Address: {type:
        {ville:String,
          rue:String
        }
    , required: true},
    type:{type:String, required:true},
    telephone: { type: String, required: false },
    prix: { type: String, required: false },
    specialite: { type: String, required: false },
    alcool: { type: String, required: false },
    facebook: { type: String, required: false },
    date_debut: { type: Date, required: false },
    date_fin:{ type: Date, required: false },
    valide: { type: Boolean, required: true, default: false },
}

);
const Demande = mongoose.model("Demande", demandeschema);
module.exports = Demande;
