const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// views: view 파일들이 전부있는 폴더
// view engine = ejs 사용
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//라우트 객체 생성(서비스할 사이트)
const mainRouter    = require('./routes/main_route');
const taskRouter    = require('./routes/task_route');

//라우트 설정
app.use('/', mainRouter);   // localhost:8080/
app.use('/task', taskRouter);   // localhost:8080/task

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});