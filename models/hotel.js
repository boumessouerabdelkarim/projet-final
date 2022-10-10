const mongoose = require("mongoose");
const schema = require("mongoose").Schema;
const hotelschema = new schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    adress: {
      type: { ville: String, rue: String },

      required: true,
    },
    logo: { type: String, required: true, default: "../uplade/hotel.jpg" },
    nb_etoile: { type: Number, required: true },
    telephone: { type: String, required: false },
    alcool: { type:String, required: true },
    description: { type: String, required: false },
    photos: { type: [String], required: false },
    commodites: { type: [String], required: false }, 
    facebook: { type: String, required: false },
    site_web_url: { type: String, required: false },
    email: { type: String, required: false },
    Comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          note: Number,
          timestamp: Number,
        },
      ],
      required: true,
    },
   
    events: { type: [String], required: false },
    administrative: { type: String, required: true, default: "admin" },
  },
  { timestamps: true }
);
const Hotel = mongoose.model("Hotel", hotelschema);
module.exports = Hotel;
