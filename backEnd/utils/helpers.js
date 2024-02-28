const mainPath = require("path");

const namePath = (path, name) => {
    const rootDir = mainPath.dirname(process.mainModule.filename);
    return rootDir + path + "/" + name;
}

module.exports = {
    namePath
};