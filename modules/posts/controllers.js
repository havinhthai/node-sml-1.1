module.exports = {
    getPosts: async (req, res) => {
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
    },

    getPost: () => { },

    createPost: () => { },

    updatePost: () => { },

    deletePost: () => { },
};