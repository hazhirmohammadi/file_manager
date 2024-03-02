import {useContext} from "react";
import {ContextStore} from '../store/ContextApi.jsx';
import axios from "axios";

const Option = () => {
    const {setOpen,setDirectory} = useContext(ContextStore);
    return (
        <div className="m-2 flex justify-between">
            <div>
                <button className="btn mr-1 btn-info" onClick={async () => {
                    setOpen("add_file")
                    try {
                        const myFileData = {}
                        const response = await axios.post('http://localhost:3001/api/data', myFileData);
                        const result = response.data;
                        setDirectory(result.dirArray)
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }}>Create File
                </button>
                <button
                    className="btn ml-1 btn-secondary"
                    onClick={ ()=>{

                    }}
                >
                    get Directory
                </button>
            </div>
            <div className="flex flex-row  text-center items-center gap-x-4">
                <div className="bg-gray-800 p-1 rounded">
                    <p>status: Connect</p>
                </div>
                <div className="bg-gray-800 p-1 rounded">
                    <p>Root: perla/home</p>
                </div>
            </div>
        </div>
    );
};

export default Option;
