const express = require('express');
const ejs = require('ejs');

const app = express();

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

// Setting static folder
app.use('/public', express.static('./public'))

app.get('/home', (req, res) => {
    res.send('<a href="/chuyen-muc">Go to category page</a> <br />');
});

app.get('/chuyen-muc', (req, res) => {
    res.send('<a href="/home">Back to Home!</a>')
});

app.listen(3000, () => {
    console.log('> Running');
})