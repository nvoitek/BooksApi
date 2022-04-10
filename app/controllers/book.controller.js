const Book = require('../models/Book');

function bookList(cb) {
    Book.find().lean().exec(function(err, books) {
        if (err) {
            cb(err);
        } else {
            cb(null, books);
        }
    });
}

function bookGet(id, cb) {
    Book.findById(id).exec(function(err, book) {
        if (err) {
            cb(err);
        } else {
            cb(null, book);
        }
    })
}

function bookAdd(data, cb) {
    let newBook = new Book(data);
 
    newBook.save(function(err, book) {
 
        if(err) {
            cb(err);
        } else {
            cb(null, book);
        }
 
    });
}

function bookUpdate(id, data, cb) {
    Book.updateOne({_id: id}, data, function(err, book) {
 
        if(err) {
            cb(err);
        } else {
            cb(null, book);
        }
 
    });
}

function bookDelete(id, cb) {
    Book.deleteOne({_id: id},function (err, book) {
        if (err) {
            cb(err);
        } else {
            cb(null, book);
        }
    });
}

module.exports = {
    list: bookList,
    get: bookGet,
    add: bookAdd,
    update: bookUpdate,
    delete: bookDelete
}