const mongoose = require("mongoose");
const schema = mongoose.Schema;
const restaurantschema = new schema(
  {
    type: { type: String, required: true },
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 40,
      trim: true,
    },
    logo: {
      type: String,
      default: "../uplade/resto.jpg",
    },

    commodites: {
      type: [String],
      required: false,
    },
    adress: {type:
      {ville:String,
        rue:String
      }
    
  
     , required: true
    },
    alcool: { type: String, required: false },
    specialite: {
      type: String,
      required: true,
    },
    description: { type: String, required: false },
    telephone: { type: String, required: false },
    email: { type: String, required: false },
    photos: { type: [String], required: false },
    Comments: { type: [
      {
        commenterId:String,
        commenterPseudo: String,
        text: String,
        note:Number,
        timestamp: Number,
      }
    ], required:true },
  
    facebook: { type: String, required: false },
    heure_ouverture: { type: String, required: false },
    administrative: { type: String, required: true, default: "admin" },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantschema);
module.exports = Restaurant;
