/*npm init시에 생성되고, 시작점인 index.js를 만든다. 이후 npm install express --save로 node_modules 설치됨 
doc참조 - https://expressjs.com/en/starter/hello-world.html*/
const express = require('express') //express모듈을 가져옴
const app = express() 
const port = 5001
const bodyParser = require('body-parser');
const { Board } = require("./models/Board");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')//mongoose사용해야하므로 그전에 mongoose --save 로 설치

mongoose.connect('mongodb+srv://user1:m0ng0elql@ccmarket.knjfp.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, 
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err)) /*띄어쓰는게 더 나을까?*/

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.get('http://localhost:5001/api/hello', (req, res) => {
  res.send('Hello World!!')
})

app.post('/register', (req,res) => {
//client에서 정보가져오면 데이터베이스에 저장 
//인스턴스 만들기
  const board = new Board(req.body)
  board.save((err, boardInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success : true
    })
  }) //mongodb 에서 오는 메시지
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//user1 m0ng0elql