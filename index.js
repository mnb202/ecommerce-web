const express = require("express");
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const routes = require ('./routes');
 const bodyParser = require('body-parser');

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json());
// // parse application/x-www-form-urlencoded


routes(app);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_ALAT)
.then(() => {
    console.log('Connect Db success!')
})
.catch((err) => {
    console.log(err)
})

app.listen(port , () => {
    console.log ('Server is running in port: ', + port)

})