import {useContext, useEffect, useState} from "react";
import {ContextStore} from "../store/ContextApi.jsx";
import {modalHtml} from "../helpers/fakeDate.js";

const Modal = () => {
    const [html, setHtml] = useState([]);
    const {open, setOpen} = useContext(ContextStore);


    useEffect(()=>{
        console.log(open)
        if (open === "add_file") {
            document.getElementById("my_modal_1").showModal();

            const add =  modalHtml[0]

            // document.getElementById("title").innerText
            setHtml(add)
        } else if (open === "edit_file") {
            document.getElementById("my_modal_1").showModal()
        } else if (open === "info_file") {
            document.getElementById("my_modal_1").showModal()
        } else if (open === "delete_file") {
            document.getElementById("my_modal_1").showModal()
        }
    } , [open])



    // let title=html.nameModal;
    // console.log("haa",title)

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                    <div  className="modal-box">
                        <h3 id="title" className="font-bold text-lg">{html.nameModal}</h3>
                        <p className="py-4"></p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn" onClick={() => {
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

