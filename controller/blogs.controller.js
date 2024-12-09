const Blog = require('../models/Blog');

async function blogs(req, res) {
    const blogs = await Blog.find();
    const data = {
        title: 'Blogs',
        blogs: blogs
    }
    res.render('pages/index', data);
}

function newBlogs(req, res) {
    const data = {
        title: 'Write a blog'
    }
    res.render('pages/new-blog', data)
}

async function createNew(req, res) {
    try {
        await Blog.create(req.body);
        res.redirect('/blogs');
    } catch(error) {
        res.status(500).send("Error occured: " + error);
    }
}

async function singleBlog(req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        const data = {
            title: blog.title,
            blog: blog
        }
        res.render('pages/single-blog', data)
    } catch(error) {
        res.status.send("Error while fetching data.");
    }
}

module.exports = {
    blogs, newBlogs, createNew, singleBlog
}