const fs = require('fs');
const { uid } = require('uid');
const router = require('express').Router();
const uid = require('uid');

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, data) => err? console.log(error) :
    res.json(data))
});

router.post('/notes', (req,res) => {

    const {title, text} = req.body;

    if (req.body) {
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
    })}})}})

    module.exports = router;