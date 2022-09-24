const mongoose = require('mongoose');
const schema = require('mongoose').Schema
const hotelschema =new schema({
    type:{type:String, required:true},
    name:{type:String, required:true},
    adress:{type:String, required:true},
    logo:{type:String, required:true , default:'../uplade/hotel.jpg'},
    nb_etoile:{type:Number, required:true},
    telephone:{type:String, required:true},
    alcool:{type:Boolean, required:true},
    description:{type:String, required:false},
    photos:{type:[String],required:false},
    commodites:{type:[String],required:false},
    lien_fb:{type:String, required:false},
    site_web_url:{type:String, required:false},
    notes:{type:[Number], required:false},
    events:{type:[String], required:false},
    administrative: {type:String, required:true,default:"admin"}

},
{timestamps:true})
const Hotel = mongoose.model("Hotel", hotelschema);
module.exports = Hotel;