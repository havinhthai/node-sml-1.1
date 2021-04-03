const express = require('express');
const ejsEngine = require('ejs-mate');
const mongoose = require('mongoose'); // Import mongoose

// Lấy đối tượng router từ file ./routes/index.js
const routes = require('./routes');

const app = express();

// Kết nối Express với database Blogger
mongoose.connect('mongodb://localhost:27017/Blogger', { useNewUrlParser: true, useUnifiedTopology: true });

// Tạo model Post
const Post = mongoose.model('Post', {
    title: String,
    views: Number,
});

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsEngine);

// Setting static folder
app.use('/public', express.static('./public'));

// Routes
app.use(routes); // Áp dụng routes đã import vào dự án

app.get('/test-model', (req, res) => {
    // Tạo document cho db dựa trên model Post
    const myPost = new Post({ title: 'Hello World 234', views: 100 });

    myPost.save().then(() => {
        console.log('> Tao post thanh cong');

        res.send('Tao thanh cong');
    }).catch(() => {
        res.send('Tao that bai');
    });
});

app.listen(3000, () => {
    console.log('> Running');
})