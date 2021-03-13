const express = require('express');
const ejs = require('ejs');

const app = express();

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

// Setting static folder
app.use('/public', express.static('./public'));

// Routes
app.get('/', (req, res) => {
    // res.send('<a href="/chuyen-muc">Go to category page</a> <br />');

    res.render('client/index');
});

app.listen(3000, () => {
    console.log('> Running');
})