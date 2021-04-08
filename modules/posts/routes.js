const express = require('express');
const router = express.Router();

const { Post } = require('../../models');

// router.get('/set-model', async (req, res) => {
//     // Tạo document cho db dựa trên model Post
//     const myPost = new Post({ title: 'Hello World 234', views: 100 });

//     // Cách 1: Dùng then/ catch để xử lý bất đồng bộ
//     myPost.save().then((result) => {
//         console.log('> Tao post thanh cong', result);

//         res.send('Tao thanh cong');
//     }).catch((error) => {
//         res.send('Tao that bai');
//     });

//     // Cach 2:
//     const result = await myPost.save();

//     console.log('> Tao post thanh cong', result);
// });

router.get('/', async (req, res) => {
    const posts = await Post
        .find({ views: { $gt: 40 } })
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

module.exports = router;