import {useContext} from "react";
import {ContextStore} from '../store/ContextApi.jsx';

const Option = () => {
    const {setOpen} = useContext(ContextStore);
    return (
        <div className="m-2 flex justify-between">
            <div>
                <button className="btn mr-1 btn-info" onClick={() => {
                    setOpen("add_file")
                }}>Create File
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
