const express = require('express');
const {blogs, newBlogs, createNew, singleBlog} = require('../controller/blogs.controller');

const router = express.Router();

router.get('/', blogs); // this is basically to show all the blogs from database
router.get('/new', newBlogs); // this is form to write a new blog

// create a new blog
router.post('/', createNew);

// single blog page
router.get('/:id', singleBlog);

module.exports = router;