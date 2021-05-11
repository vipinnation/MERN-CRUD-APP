const express = require('express');
const app = express();

const mongoose = require('mongoose');
const web = require('./Web/web')

const dbUrl = 'mongodb://localhost:27017/mernCrud'
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DataBase Connected"))
    .catch(err => console.log(err))


app.use(express.urlencoded({extended:true}))
app.use(express.json())


web(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server Running on ${POST}'))
