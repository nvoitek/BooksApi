const mongoose = require("mongoose");

mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, {useNewUrlParser: true, useUnifiedTopology: true})

const schema = new mongoose.Schema ({
    author: {type: String, required: true},
    title: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    isRead: {type: Boolean, default: false}
});
 
module.exports = mongoose.model('Book', schema);