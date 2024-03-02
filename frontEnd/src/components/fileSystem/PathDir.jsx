import {useContext, useEffect, useRef, useState} from "react";
import {ContextStore} from "../../store/ContextApi.jsx";

const PathDir = () => {
    /*===get Directory list ====*/
    const {directory} = useContext(ContextStore);
    const [spanValue, setSpanValue] = useState();
    const [allDirectory, setAllDirectory] = useState([]);


    useEffect(() => {
        console.log(allDirectory)
    }, [setSpanValue, spanValue,allDirectory,setAllDirectory]);


    const handleClick = (dir) => {
        if (!allDirectory.find(value => value===dir)) {
            setAllDirectory(prevState => [...prevState, dir]);
        }
        setSpanValue(dir)
        console.log(dir)
    };

    return (
        <div className="flex flex-col">
            <div className="w-full  text-sm breadcrumbs">
                <ul>
                    <li>Home</li>
                    <li>perla</li>
                    <li>{spanValue}</li>
                </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 p-2 bg-gray-900 rounded">

                {directory.map((dir, index) => (
                    <span key={index}
                          onClick={() => {
                              handleClick(dir);
                          }}
                          className="p-2 bg-orange-500 text-black rounded text-xs cursor-pointer hover:bg-orange-700"
                    >
                  {dir}
              </span>
                ))}
            </div>
        </div>
    );
};

export default PathDir;
