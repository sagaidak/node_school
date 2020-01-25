const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const database = require('./db/database');

const app = express();

app.set('views', 'src/routes');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let test = ['Qwe', 'Asd', 'test'];

app.get('/', (req, res) => res.render('index', {data: test}));

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
	test.push(req.body.text);
	res.redirect('/'); 
});

database().then(info => {
	console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
	app.listen(config.PORT, () => console.log(`School app listening on port ${config.PORT}!`));
}).catch(err => console.log(err));


















