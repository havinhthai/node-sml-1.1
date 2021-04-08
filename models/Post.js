const mongoose = require('mongoose'); // Import mongoose

const Post = mongoose.model('Post', {
    title: String,
    views: Number,
});

module.exports = Post;