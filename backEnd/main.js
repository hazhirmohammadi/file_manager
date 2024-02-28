//Internal modules


//External modules
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const File = require("./model/file")
const helpers = require("./utils/helpers")

const app = express();
const PORT = 3001;
app.use(express.json()); // Add this middleware for JSON data parsing
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.post('/api/data', (req, res) => {
    const requestData = req.body;
    const file = helpers.namePath("/rootTest", `${requestData.filename}.txt`)
    console.log(file)
   File.createFile(file, "hi hazhir");


  //  res.json({message: 'Hello from the server!  😀'});
});


app.listen(PORT, () => {
    console.log(`😀Server is running on http://localhost:${PORT}`);
});
