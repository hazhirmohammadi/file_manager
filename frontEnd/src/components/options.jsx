import {useContext, useState} from "react";
import {ContextStore} from '../store/ContextApi.jsx';



const Option = () => {
    const {setOpen} = useContext(ContextStore);


    return (
        <div className="m-2">
               <button className="btn mr-1 btn-info" onClick={()=>{setOpen("add_file")}}>Create File</button>
        </div>
    );
};

export default Option;
