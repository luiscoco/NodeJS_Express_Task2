// const express = require('express'); // Require Express module
// const session = require('express-session'); // Require Express session module
// const path = require('path');

// const app = express();

// const notes_init = [
//     { text: "First note" },
//     { text: "Second note" },
//     { text: "Third note" }
// ];

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, './public')));

// // Add session middleware
// app.use(session({
//     secret: 'node_tutorial',
//     resave: true,
//     saveUninitialized: true
// }));

// // Middleware to parse JSON data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Now you can define your routes and other configurations for the app
// app.get("/notes", function (req, res) {
//     console.log("reading notes", req.session.notes);
//     if (!req.session.notes) {
//         req.session.notes = notes_init;
//     }
//     res.send(req.session.notes);
// });

// app.post("/notes", function (req, res) {
//     let note = req.body.note; // Assuming the request contains the 'note' field in the body
//     if (!req.session.notes) {
//         req.session.notes = []; // Initialize notes array in the session if it doesn't exist
//     }
//     req.session.notes.push({ text: note });
//     console.log("added note", req.session.notes);
//     res.end();
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express'); // Require Express module
const session = require('express-session'); // Require Express session module
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './public')));

// Add session middleware
app.use(session({
    secret: 'node_tutorial',
    resave: true,
    saveUninitialized: true
}));

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory array to store notes
let notes = [];

// Now you can define your routes and other configurations for the app
app.get("/notes", function (req, res) {
    console.log("reading notes", notes);
    res.send(notes);
});

app.post("/notes", function (req, res) {
    let note = req.body.note; // Assuming the request contains the 'note' field in the body
    notes.push({ text: note });
    console.log("added note", notes);
    res.end();
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
