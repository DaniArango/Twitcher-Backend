const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require("./config/config")
const {typeError} = require ("./middlewares/error")
const cors = require('cors');

app.use(express.json(),cors())


app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));
dbConnection()

app.use(typeError);
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));