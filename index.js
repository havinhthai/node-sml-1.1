const express = require('express');
const ejsEngine = require('ejs-mate');

// Lấy đối tượng router từ file ./routes/index.js
const routes = require('./routes');

const app = express();

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsEngine);

// Setting static folder
app.use('/public', express.static('./public'));

// Routes
app.use(routes); // Áp dụng routes đã import vào dự án

app.listen(3000, () => {
    console.log('> Running');
})