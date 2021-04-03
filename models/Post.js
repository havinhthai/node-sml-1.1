const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    title: String,
    views: Number,
});

