import {dirFake} from "../helpers/fakeDate.js";
import SingleFile from "./SingleFile.jsx";

const SideBar = () => {

    return (
        <div className="h-[670px] container-x pr-2">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>File name</th>
                        <th>date</th>
                        <th>kb</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dirFake.map((item,index)=>(
                        <SingleFile
                            key={index}
                            index={index}
                            filename={item.filename}
                            datetime={item.datetime}
                            volume={item.volume}
                       />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SideBar;
