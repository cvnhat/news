const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/new');
        console.log('Connect succesfully');
    } catch (error) {
        console.log('Connect Fail');
    }
}

module.exports = { connect };
