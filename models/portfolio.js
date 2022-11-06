const {model,Schema} = require('mongoose')


const portforlio = Schema({
    title:String,
    description:String,
    image:String,
})


module.exports = model('portfolie',portforlio)