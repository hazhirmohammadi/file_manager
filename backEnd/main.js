//Internal modules
const os = require('os');
const fs = require("fs");


//External modules
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const File = require("./model/file")
const Helpers = require("./utils/helpers")


const app = express();
const PORT = 3001;


app.use(express.json()); // Add this middleware for JSON data parsing
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/api/data', (req, res) => {
    const requestData = req.body;

    const file = Helpers.namePath("/rootTest", `${requestData.fileName}`, `${requestData.fileType}`)
     function example() {
        const helpers = new Helpers();
        const files =  helpers.rootFiles();
       return  console.log('Files:', files);
    }

    console.log(11)
    example()
    console.log(12)

    if (!file)
        File.createFile(file, "hi hazhir");
    //  res.json({message: 'Hello from the server!  😀'});
});


app.listen(PORT, () => {
    console.log(`😀Server is running on http://localhost:${PORT}`);
});
