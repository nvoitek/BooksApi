const express = require("express");
const router = express.Router();

const book = require('../controllers/book.controller');

router.get('/all', function(req, res){
    book.list(function(err, books){
        if(err) {
            res.status(404);
            res.json({
                error: "Books not found"
            });
        } else {
            res.json(books);
        }
    });
});

router.get('/all/:isRead', function(req, res){
    book.filter(req.params.isRead, function(err, books){
        if(err) {
            res.status(404);
            res.json({
                error: "Books not found"
            });
        } else {
            res.json(books);
        }
    });
});

router.get('/:id', function(req, res){ 
    book.get(req.params.id, function(err, book){
        if(err) {
            res.status(404);
            res.json({
                error: "Book not found"
            });
        } else {
            res.json(book);
        }
    })
});

router.post('/add', function(req, res){
    book.add(req.body, function(err, book){
        if(err) {
            res.status(404);
            res.json({
                error: "Book not created"
            });
        } else {
            res.json(book);
        }
    })
});
 
router.put('/:id', function(req, res){
    book.update(req.params.id, req.body, function(err, data){
        if(err) {
            res.status(404);
            res.json({
                error: "Book not found"
            });
        } else {
            res.json(data);
        }
    });
     
})
 
router.delete('/:id', function(req, res){
    book.delete(req.params.id, function(err, data){
        if(err) {
            res.status(404);
            res.json({
                error: "Book not found"
            });
        } else {
            res.json(data);
        }
    });
     
});

module.exports = router;