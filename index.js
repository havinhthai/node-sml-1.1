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
    // Tạo biến postsTao trên server
    const postsTao = [
        { 
            title: 'Tin giật gân 1', 
            description: 'mo tar', 
            author: 'Thai', 
            createdAt: '13/02/2021' 
        },
        {
            title: 'Tin giật gân 2',
            description: 'mo tar',
            author: 'Thai',
            createdAt: '13/02/2021'
        },
        {
            title: 'Tin giật gân 3',
            description: 'mo tar',
            author: 'Thai',
            createdAt: '13/02/2021'
        }
    ];

    res.render('client/page/homepage', {
        posts: postsTao, // Truyền biến posts từ Server xuống view qua hàm render
    });
});

app.get('/post', (req, res) => {
    // Bước 1: Xác định dữ liệu truyền xuống View
    // title, description, content, author, 
    const post = {
        title: 'ABC',
        description: 'DDaya la motaaa',
        content: '2uawdahsdjladdd....',
        author: 'mr T',
        authorBlog: 'https://tuidev.io',
        createdAt: '15/03/2021'
    };

    res.render('client/page/post', {
        post: post, // Bước 2: Truyền dữ liệu từ Express xuống View
    });
})

app.listen(3000, () => {
    console.log('> Running');
})