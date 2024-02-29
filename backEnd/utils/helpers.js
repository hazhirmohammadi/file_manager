const mainPath = require("path");
const os = require("os");
const fs = require("fs");

class Helpers {
    constructor() {
    }

    static namePath(path, name, type) {
        const rootDir = mainPath.dirname(process.mainModule.filename);
        return rootDir + path + "/" + name + type;
    }

     rootFiles() {
        try {
            //find main root system
            const homeDirectory = os.homedir();

            const files =  fs.readdirSync(homeDirectory)

            const findPath= homeDirectory+"/"+ "Desktop";
            const ss= fs.readdirSync(findPath)

            console.log(`desktop Files:`,ss)
            //filter hidden file
            const nonHiddenFiles = files.filter(file => !file.startsWith('.'));

           //return system files list
            return nonHiddenFiles;
        } catch (err) {
            console.error('Error reading home directory:', err);
            return [];
        }
    }
}

module.exports = Helpers;


