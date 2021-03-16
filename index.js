const express = require('express');
const ejsEngine = require('ejs-mate');

const app = express();

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsEngine);

// Setting static folder
app.use('/public', express.static('./public'));

// Routes
app.get('/', (req, res) => {
    // res.send('<a href="/chuyen-muc">Go to category page</a> <br />');
    res.render('client/page/homepage');
});

app.get('/post', (req, res) => {
    res.render('client/page/post');
})

app.listen(3000, () => {
    console.log('> Running');
})