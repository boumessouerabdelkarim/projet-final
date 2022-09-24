const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventschema = new schema({
  type: { type: String, required: true },
  name: {
    type: String,
    required: true,
    minLength: 4,
  },
  prix: { type: String, required: true },

  details: { type: String, required: false },

  lien_event: { type: String, required: false },

  date_debut: {
    type: String,
    required: true,
  },
  date_fin: {
    type: String,
    required: true,
  },
  lien_fb: {
    type: String,
    required: false,
  },
  adress: {
    type: String,
    required: true,
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
  administrative: {type:String, required:true,default:"admin"}

},{timestamps:true});

const Event = mongoose.model("Event", eventschema);
module.exports = Event;
