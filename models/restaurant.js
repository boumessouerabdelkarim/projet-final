const mongoose = require("mongoose");
const schema = mongoose.Schema;
const restaurantschema = new schema({
  type: { type: String, required: true },
  nom: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 40,
    trim: true,
  },
  logo: {
    type: String,
    default: "",
  },

  commodites: {
    type: [String],
    required: false,
  },
  adress: {
    type: String,
    required: true,
    minLength: 10,
  },
  alcool: { type: String, required: false },
  cuisine: {
    type: [String],
    required: false,
  },
  description: { type: String, required: true },

  photos: { type: [String], required: false },
  Notes: { type: Number, min: 0, max: 5, required: false },
  facebook: { type: String, required: false },
  heure_ouverture:{type: String, required: false}
},{timestamps:true}
);

const Restaurant = mongoose.model("Restaurant", restaurantschema);
module.exports = Restaurant;
