const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors(
  {
    origin: ["https://dynamic-list-mern-sandeepak.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials:true
  }
));

//import routes
const TodoItemRoute = require('./routes/todoItems');
app.get('/', (req, res) => {
  console.log("I'm Working");
  res.send('Hello!'); 
});

//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log(`Server connected on PORT ${PORT}`) );
