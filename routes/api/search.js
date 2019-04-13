const router = require("express").Router();
const Book = require("../../models/book");


router.get('/test', (req, res) => res.json({ msg: " Search Works" }));

router.post("/search", (req, res) => {
    Book.findAll({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link})
        .then(search => {res.json(search)});
    });



module.exports = router;