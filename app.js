//server using express...
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const port = 8080;
const hostname = '127.0.0.1';

const url='mongodb://localhost:27017/Data';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected to database");
});

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const SignupRouter = require('./routes/signup');




app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', SignupRouter);


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
