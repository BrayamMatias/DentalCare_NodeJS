const express = require('express');
const morgan =require('morgan');

const {db} = require('./firebase.js')

const app = express();

app.use(morgan('dev'))

app.get('/', async (req, res) => {

     const querySanpshot = await db.collection('Diagnosticos').get()

     console.log(querySanpshot.docs[0].data());

    res.send('Hello')
})

module.exports = app;