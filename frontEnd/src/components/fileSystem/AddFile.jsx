import {useRef, useState} from "react";
import axios from "axios";
import helper from "../../helpers/helper.js";

const AddFile = () => {


    const fileNameRef = useRef(null);
    const fileTypeRef = useRef(null);

//validation
    const [validateStatus, setValidateStatus] = useState({});
    const [data, setData] = useState("");
    const [myFileData, setFileData] = useState({});


    //send data file from server
    const fetchData = async () => {
        try {

            const response = await axios.post('http://localhost:3001/api/data', myFileData);
            const result = response.data;
            // console.log(result);
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    //handheld file data
    const handleInputChange = () => {

        //get values
        const fileNameValue = fileNameRef.current.value;
        const fileTypeValue = fileTypeRef.current.value;


        //validation File Name
        const fileNameRegex = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]+)?$/;
        const isValidate = fileNameRegex.test(fileNameValue);

        if (isValidate === true) {
            setValidateStatus({
                message: "name file is OK",
                status: 1
            })
           const fileObj=new helper(fileNameValue,fileTypeValue);
            //console.log(fileObj)
            setFileData(fileObj);
            console.log("file name is OK!")

        } else {
            setValidateStatus({
                message: "not Validate",
                status: 0
            });
            console.log("fixed name file")
        }

    };

    return (
        <div className="flex flex-col justify-center ">
            <div className="flex justify-between">
                <h3 className="font-bold text-lg">Create File </h3>
                {validateStatus.status === 1 ?
                    <p className="py-2 px-3 rounded-full bg-green-600 text-xs ">{validateStatus.message}</p> :
                    validateStatus.status === 0 ?
                        <p className="py-2 px-3 rounded-full bg-red-500 text-xs">{validateStatus.message}</p> :
                        null
                }

            </div>
            <p className="py-4">Enter File Name </p>
            <div className="flex flex-row">
                <input
                    ref={fileNameRef}
                    onChange={handleInputChange}
                   // onChange={handleInputChange}
                    className="py-2 px-2 rounded-lg border-none outline-none mb-4"
                    placeholder="file Name"
                    type="text"
                />
                <select
                    ref={fileTypeRef}
                    onChange={handleInputChange}
                    className="select select-primary w-full max-w-xs">
                    <option disabled selected>Type File</option>
                    <option>.txt</option>
                    <option>.jsx</option>
                    <option>.json</option>
                    <option>.js</option>
                </select>
            </div>
            <button
                onClick={() => {
                    fetchData()
                    handleInputChange()
                }}
                className="btn hover:bg-green-700 hover:text-white"
            >Create
            </button>
        </div>
    )
}


export default AddFile;
