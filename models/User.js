const mongoose = require('mongoose');

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
});

modules.export = User;