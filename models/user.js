const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
      default: "user",
    },
    photo: {
      type: String,
      default: "../uplade/user.png",
    },
    adress: {type:
      {ville:String,
        rue:String
      }
    
    },
    telephone: { type: String, required: false },
   facebook_profile: { type: String, required: false },
   
    is_admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
