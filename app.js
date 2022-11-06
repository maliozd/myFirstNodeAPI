const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
const postsRoute = require('./routes/posts');

// //Middlewares
// app.use('/posts', () => {
//     console.log("Hello ! I am middleware!");
// });
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRoute)



app.get('/', (req, res) => {
    res.send("We are on home");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser : true }, () => console.log('Connected to db'));

app.listen(3000);
//routes