const fs = require('fs') //파일에 접근할 수 있는 라이브러리
const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.json()); //기본적으로 REST API에서는 데이터를 주고 받을 때 json이라는 일종의 데이터형식을 이용해서 데이터를 주고받음.
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data); //해당 환경설정 데이터를 파싱해서 가져옴
const mysql = require('mysql');

const connection = mysql.createConnection({ //연결과 관련한 변수 설정
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
})
connection.connect(); //커넥팅을 진행

const multer = require('multer');
const upload = multer({ dest: './upload' });

app.get('/api/customers', (req, res) => {
    connection.query( //쿼리를 날림
      "SELECT * FROM CUSTOMER", //CUSTOMER 테이블에 접근해서 데이터를 가져옴
      (err, rows, fields) => {
        res.send(rows); //가져온 데이터는 rows라는 변수로 처리해서 보여줌
      }
    )
});

app.use(express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
})

app.listen(port, () => console.log(`Listening on port ${port}`));
