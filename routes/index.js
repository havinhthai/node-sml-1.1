const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/post', (req, res) => {
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
});


// Xuất đối tượng router ra ngoài
module.exports = router;