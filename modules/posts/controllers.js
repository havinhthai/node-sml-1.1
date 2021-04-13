const { Post } = require('../../models');

module.exports = {
    getPosts: async (req, res) => {
        try {
            const posts = await Post
                .find()
                .select('_id title')
                .lean();

            res.json({
                status: 200,
                message: 'Success',
                payload: posts,
            });
        } catch (err) {
            res.json({
                status: 500,
                message: 'Internal del biet',
                payload: err,
            });
        }
    },

    getPost: async (req, res) => { 
        try {
            const { id } = req.params;

            const post = await Post
                .findOne({ _id: id })
                .lean();

            if (!post) { // Kiểm tra có bài post không?
                res.json({ // Nếu không có thì trả về 404
                    status: 404,
                    message: 'Not found',
                    payload: null,
                });

                return; // Phải có return
            }

            res.json({
                status: 200,
                message: 'Success',
                payload: post,
            });
        } catch (err) {
            res.json({
                status: 500,
                message: 'Internal del biet',
                payload: err,
            });
        }
    },

    createPost: async (req, res) => {
        const { title, description } = req.body; // Lấy title và description từ body do người dùng nhập
        // const title = req.body.title;
        // const description = req.body.description;
        console.log('> Req.body', req.body);

        let post = new Post({
            title: title,
            description, 
        });

        post = await post.save();

        res.json({ 
            status: 200,
            message: 'Tao thanh cong',
            payload: post,
        });
     },

    updatePost: async (req, res) => {
        const { id } = req.params; // Lấy id từ url
        // const id = req.params.id;

        const { title } = req.body;   
        
        const post = await Post.updateOne({ _id: id }, {
            title: title,
        });

        res.json({
            status: 200,
            message: 'Success',
            payload: post,
        });
    },

    deletePost: async (req, res) => { 
        const { id } = req.params;

        const post = await Post.remove({ _id: id });

        res.json({
            status: 200,
            message: 'Success',
            payload: post,
        });
    },
};