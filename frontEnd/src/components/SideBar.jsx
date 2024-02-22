import {dirFake} from "../helpers/fakeDate.js";

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
                        <tr key={index} className="hover">
                            <th>{index}</th>
                            <td>{item.filename}</td>
                            <td>{item.datetime}</td>
                            <td>{item.volume}</td>
                            <div onClick={()=>{ navigator.clipboard.writeText("")}} className="relative cursor-pointer ">
                                <div className="absolute top-1 left-1 w-[15px] h-[15px] rounded border-gray-50 border bg-gray-400"></div>
                                <div className=" w-[15px] h-[15px] rounded border-gray-50 border"></div>
                            </div>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SideBar;
