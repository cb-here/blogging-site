const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

(async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/blogs");
        console.log("Connection established....");
    } catch(error) {
        console.log("Error: " + error.message);
    }
}) ();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
app.use('/blogs', require('./routes/blogs.route'));

const PORT = 8081;

app.listen(PORT, () => {
    console.log("Server is running at 8081");
})