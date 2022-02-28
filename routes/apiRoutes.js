const fs = require('fs');
const express = require('express');
const router = express.Router();
const {uid} = require('uid');


// GET /api/notes - returns data stored in json object
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, data) => error? console.log(error) :
    res.json(data));
});

router.post('/notes', (req,res) => {

    const {title, text} = req.body;

//if note has both a title and body text, save note.
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uid(15),
        };

    // obtain existing notes
    fs.readFile('./db/db.json', 'utf8', (error, data) => {
        if (error){
            console.error(error);
        } else {
    //convert string into JSON object
            const existingNotes = JSON.parse(data);
    
    // add new note
    existingNotes.push(newNote);

    //write all notes back into file
    fs.writeFile("./db/db.json", JSON.stringify(existingNotes), (writeErr) => {
      writeErr ? console.error(writeErr) : console.info("Successfully added note!")
    });
}
});

 const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Failed to save note. Please try again.');
  };
})

    module.exports = router;