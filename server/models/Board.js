const mongoose = require('mongoose');//근데 이렇게만하면 바로 nodemodeul 에 있는걸 가져올수있는이유가뭐지

const boardScheme = mongoose.Schema({ //board 로만 변수선언해도 될까...
    writer :{
        type: String,
        maxlenght : 50
    },
    title:{
        type: String,
        maxlenght : 50
    },
    content:{
        type: String
    }
})

const Board = mongoose.model('Board',boardScheme)
module.exports =  {Board}