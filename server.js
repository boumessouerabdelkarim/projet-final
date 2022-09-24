console.clear();
const express = require('express');
const cors= require('cors');
const app = express();


require('dotenv').config();
//connect to database
const dbconnect= require('./config/db_connect');
dbconnect();
// app using
app.use(express.json());
app.use(cors());



//routes
app.use('/user',require('./routes/UserRoute'))
app.use('/restaurant',require('./routes/Rest.Route'));
app.use('/evenements',require('./routes/EventRoute'))
app.use('/hotels',require('./routes/HotelRoute'))
app.use('/etablissements',require('./routes/Etab.Route'))

//connection to server
app.listen(process.env.PORT, (error)=>error?console.log("server connection failed: ", error):
console.log("server connection successfully"))