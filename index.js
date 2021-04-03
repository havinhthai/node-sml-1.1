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

const User = mongoose.model('users', {
    name: {
        type: String,
        default: 'AnDanh',
    },
    email: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

// Setting view engine for Express
app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsEngine);

// Setting static folder
app.use('/public', express.static('./public'));

// Routes
app.use(routes); // Áp dụng routes đã import vào dự án

app.get('/set-model', async (req, res) => {
    // Tạo document cho db dựa trên model Post
    const myPost = new Post({ title: 'Hello World 234', views: 100 });

    // Cách 1: Dùng then/ catch để xử lý bất đồng bộ
    myPost.save().then((result) => {
        console.log('> Tao post thanh cong', result);

        res.send('Tao thanh cong');
    }).catch((error) => {
        res.send('Tao that bai');
    });

    // Cach 2:
    const result = await myPost.save();

    console.log('> Tao post thanh cong', result);
});

app.get('/get-model', async (req, res) => {
    const posts = await Post
        .find({ views: { $gt: 40 }})
        .select('_id title')
        .lean();

    const postsFake = await Post
        .find({ views: { $lte: 40 } })
        .select('_id title')
        .lean();
    
    // const post = await Post
    //     .findOne({ views: 40 })
    //     .select('_id title views')
    //     .lean();

    const data = { posts, postsFake }

    res.json(data);
});

app.get('/register', async (req, res) => {
    try {
        // req.body: Du lieu do nguoi dung dang 
        const { email, name, password } = req.body;

        const user = User.findOne({ email: email });

        if (user) {
            res.send('User da ton tai');

            return;
        }

        const newUser = new User({ name: 'Hi', email: 'demo@gmail.com', password: 123 });

        await newUser.save();

        res.send('Dang ky thanh cong')
    } catch (error) {
        res.send(error);
    }
})

app.listen(3000, () => {
    console.log('> Running');
})