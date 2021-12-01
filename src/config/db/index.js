const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://huutham:tht254254@huutham.va4mx.mongodb.net/music', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect fully');
    } catch (error) {
        console.log('Error connecting');
    }

}

module.exports = { connect };