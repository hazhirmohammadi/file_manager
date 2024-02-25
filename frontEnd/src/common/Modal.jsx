import {useContext, useEffect, useState} from "react";
import {ContextStore} from "../store/ContextApi.jsx";
import {modalHtml} from "../helpers/fakeDate.js";
import AddFile from "../components/fileSystem/AddFile.jsx";
import EditFile from "../components/fileSystem/EditFile.jsx";
import DeleteFile from "../components/fileSystem/DeleteFile.jsx";

const Modal = () => {
    const {open, setOpen} = useContext(ContextStore);

    useEffect(() => {
        if (open === "add_file") {
            document.getElementById("my_modal_1").showModal();
        } else if (open === "edit_file") {
            document.getElementById("my_modal_1").showModal()
        } else if (open === "info_file") {
            document.getElementById("my_modal_1").showModal()
        } else if (open === "delete_file") {
            document.getElementById("my_modal_1").showModal()
        }else {
            console.log(Error)
        }
    }, [open]);




    console.log(open)


    return (
        <div>
            <dialog id="my_modal_1" className="modal ">
                    <div  className="modal-box shadow-2xl shadow-gray-400">
                        {open==="add_file"? <AddFile/>:
                            open==="edit_file"?<EditFile/>:
                                open==="delete_file"?<DeleteFile/>:null
                        }
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn hover:bg-red-800" onClick={() => {
                                    setOpen(false)
                                }}>Close
                                </button>
                            </form>
                        </div>
                    </div>
            </dialog>

        </div>
    );
};
export default Modal;

