const fs=require("fs");
const rootDir = require("../utils/path");
class File {
    constructor(fileContent,filePath) {
        this.fileContent=fileContent;
        this.filePath=filePath;
    }

    static createFile(filePath,fileContent) {
        fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
                console.error('Error creating file:', err);
            } else {
                console.log('File created successfully!');
            }
        });
    }

}

module.exports = File;