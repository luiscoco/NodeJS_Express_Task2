const express = require('express'); // Require Express module
const session = require('express-session'); // Require Express session module
const path = require('path');

const app = express();

const notes_init = [
    {text: "First note"},
    {text: "Second note"},
    {text: "Third note"}
];

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './public')));

// Add session middleware
app.use(session({
    secret: 'node_tutorial',
    resave: true,
    saveUninitialized: true
}));

// Now you can define your routes and other configurations for the app
app.get("/notes", function(req,res) {
    console.log("reading notes", req.session.notes);
    if (!req.session.notes) {
        req.session.notes = notes_init;
    }
    res.send(req.session.notes);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});








