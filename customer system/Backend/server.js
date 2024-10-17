const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db_connection = require("./database/index");
var cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

  
const userRoutes = require("./routes/user");
const admin = require('./routes/admin.js');


const app = express();

app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db_connection();


app.use("/user", userRoutes); 
app.use('/admin', admin);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
