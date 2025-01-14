// create web server
// create a route for comments
// create a get request for comments
// create a post request for comments

const express = require('express');
const router = express.Router();
const fs = require('fs');

// GET request for comments
router.get('/', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred: ' + err);
            return;
        }

        res.send(data);
    });
});

// POST request for comments
router.post('/', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred: ' + err);
            return;
        }

        let comments = JSON.parse(data);
        comments.push(req.body);

        fs.writeFile('comments.json', JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                res.status(500).send('An error occurred: ' + err);
                return;
            }

            res.send('Comment added');
        });
    });
});

module