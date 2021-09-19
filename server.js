const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.json()); //기본적으로 REST API에서는 데이터를 주고 받을 때 json이라는 일종의 데이터형식을 이용해서 데이터를 주고받음.
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '윤동주',
          'birthday' : '980817',
          'gender' : '남성',
          'job' : '대학생'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '짭동주',
          'birthday' : '980815',
          'gender' : '여성',
          'job' : '중학생'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '간동주',
          'birthday' : '980819',
          'gender' : '중성',
          'job' : '고등학생'
        }
    
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
