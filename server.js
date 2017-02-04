const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
var dirname = '/Users/MGS/WebstormProjects/untitled2';
app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.render('index.ejs', {quotes: result})
    })
});
app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log(req.body);
        res.render('index.ejs', req.body);
        res.redirect('/');
    })
});

MongoClient.connect('mongodb://cahyowhy:12345@ds135689.mlab.com:35689/crudmongodb', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, () => {
        console.log('listening on 3000');
    })
});