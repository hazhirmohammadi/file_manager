const mainPath = require("path");
const os = require("os");
const fs = require("fs");

class Helpers {
    constructor(findDir) {
        this.findDir = findDir;
    }

    static namePath(path, name, type) {
        const rootDir = mainPath.dirname(process.mainModule.filename);
        return rootDir + path + "/" + name + type;
    }

    rootFiles() {
        try {
            const findDir = this.findDir ? this.findDir : "Desktop"

            //read home
            const homeDirectory = os.homedir();
            const files = fs.readdirSync(homeDirectory)

            //read dynamic files
            const findPath = homeDirectory + "/" + `${findDir}`
            const FileDynamic = fs.readdirSync(findPath)

            //filter hidden file
            const nonHiddenFiles = files.filter(file => !file.startsWith('.'));//problem ****

            //return system files list
            return FileDynamic ? FileDynamic : nonHiddenFiles;

        } catch (err) {
            console.error('Error reading home directory:', err);
            return [];
        }
    }
}

module.exports = Helpers;


