const mainPath = require("path");

const namePath = (path, name, type) => {
    const rootDir = mainPath.dirname(process.mainModule.filename);
    return rootDir + path + "/" + name + type;
}

module.exports = {
    namePath
};