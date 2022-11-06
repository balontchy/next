const express = require('express')
require('dotenv').config()
const portfolio = require('./routes/route')
const server = express()
const {connect} = require('mongoose')



//engine
server.set('view engine', 'ejs');
server.use(express.json())



//static folder
server.use(express.static('public'))


//routes
server.use('/api',portfolio)


//express
server.listen(process.env.PORT, () =>

    console.log(`server on http://localhost:${process.env.PORT}`))
server.get('/',(req,res) => res.render('index') )

//mongodb
connect(process.env.CS,(err) => err?console.log(err.message): console.log('mongoose connected'))