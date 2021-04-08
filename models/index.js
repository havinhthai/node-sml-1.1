const User = require('./User');
const Post = require('./Post');

module.exports = {
    User, // Cách 1
    Post: Post, // Cách 2
}