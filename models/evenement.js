const mongoose = require("mongoose");
const ObjectID = require("mongoose").Types.ObjectId;
const schema = mongoose.Schema;

const eventschema = new schema({
  type: { type: String, required: true },
  name: {
    type: String,
    required: true,
    minLength: 4,
  },
  prix: { type: String, required: true },

  description: { type: String, required: false },

  

  date_debut: {
    type: Date,
    required: true,
  },
  date_fin: {
    type: Date,
    required: true,
  },
  facebook: {
    type: String,
    required: false,
  },
  adress: {type:
    {ville:String,
      rue:String
    }
  

   , required: true,
  },
  logo: {
    type: String,
    default: '../uplade/event.png',
    required: false,
  },
  organization: {
    type: String,
    required: true,
  },
  telephone: {type: String, required:false, },
  Comments: {
    type: [
      {
        commenterId: String,
        commenterPseudo: String,
        text: String,
       note:Number,
        timestamp: String,
      },   
    ],
    required: true,
  },
 
  administrative: {type:String, required:true,default:"admin"}

},{timestamps:true});

const Event = mongoose.model("Event", eventschema);
module.exports = Event;
