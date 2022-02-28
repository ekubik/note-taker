//import modules
const fs = require("fs");
const express = require("express");
const path = require("path");

const router = require("./routes/apiRoutes");

//select port
const PORT = process.env.PORT || 3004;
const app = express();

//middleware to read data properly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files from public folder
app.use(express.static("public"));



//HTML routes serving static files

//get notes html page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//get home page
//had to move this below, '/notes/ routes, as otherwise index.html was preferentially returned
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html')))
;

app.use('/api', router);

//code executed if running successfully
app.listen(PORT, () =>
  console.log(`Now listening at http://localhost:${PORT}`)
);
