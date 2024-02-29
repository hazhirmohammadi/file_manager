class Helper {
    constructor(fileName, fileType, contentFile) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.contentFile = contentFile;
    }

    objectCreator() {
        return {
            fileName: this.fileName,
            contentFile: this.contentFile,
            fileType: this.fileType
        };
    }
}

export default Helper;