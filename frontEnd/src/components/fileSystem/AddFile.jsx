import {useState} from "react";
import axios from "axios";


const AddFile = () => {

    const [vlidateStatus, setVlidateStatus] = useState({});
    const [data, setData] = useState("");
    const [myMessage, setMyMessage] = useState("");
    const message = {filename: myMessage};

    const fetchData = async () => {
        try {

            const response = await axios.post('http://localhost:3001/api/data', message);
            const result = response.data;
            // console.log(result);
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleInputChange = (event) => {
        const inputString = event.target.value;
        const fileNameRegex = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]+)?$/;
        const isValidate = fileNameRegex.test(inputString);
        if (isValidate === true) {
            setVlidateStatus({
                message: "name file is OK",
                status: 1
            })
            setMyMessage(inputString);
            console.log("file name is OK!")
        } else {
            setVlidateStatus({
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
                {vlidateStatus.status === 1 ?
                    <p className="py-2 px-3 rounded-full bg-green-600 text-xs ">{vlidateStatus.message}</p> :
                    vlidateStatus.status === 0 ?
                        <p className="py-2 px-3 rounded-full bg-red-500 text-xs">{vlidateStatus.message}</p> :
                        null
                }

            </div>
            <p className="py-4">Enter File Name </p>
            <input
                onChange={handleInputChange}
                className="py-2 px-2 rounded-lg border-none outline-none mb-4"
                placeholder="file Name"
                type="text"
            />
            <button
                onClick={() => {
                    fetchData()
                }}
                className="btn hover:bg-green-700 hover:text-white"
            >Create
            </button>
        </div>
    )
}


export default AddFile;
