const User = require('./User');
const Post = require('./Post');

modules.export = {
    User, // Cách 1
    Post: Post, // Cách 2
}