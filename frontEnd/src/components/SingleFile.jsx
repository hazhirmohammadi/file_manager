import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const SingleFile = ({filename, datetime, volume, index}) => {
    const [down, setDown] = useState(false);
    return (
        <tr key={index} className="hover">
            <th>{index}</th>
            <td>{filename}</td>
            <td>{datetime}</td>
            <td>{volume}</td>
            <td className="relative">
                <button onClick={() => {
                    setDown(!down)
                }} className=" flex flex-col gap-y-[3px] cursor-pointer w-[15px]">
                    <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
                    <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
                    <div className="rounded-full bg-white w-[4px] h-[4px]"></div>
                </button>
            </td>
            {down ?
                <div
                    className="z-10 absolute blur-element  left-[35%]  divide-y  rounded-lg shadow-2xl shadow-slate-700 w-44 bg-[#313131]">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        <li>
                            <a href="#"
                               className="block text-xs px-4 py-2  hover:bg-gray-600 text-green-500">Edit</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block text-xs px-4 py-2 hover:bg-gray-600 text-red-500">Deleted</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block text-xs px-4 py-2 hover:bg-gray-600 text-yellow-500">information
                            </a>
                        </li>
                        <li onClick={() => {
                            setDown(false)
                        }}>
                            <a href="#"
                               className="block text-xs px-4 py-2 hover:bg-gray-600 text-white">Close</a>
                        </li>
                    </ul>
                </div>
                : null
            }
        </tr>
    );
};

export default SingleFile;
