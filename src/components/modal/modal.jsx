import React from "react";
import "./modal.css";

const Modal = ({score}) => {
    return (
        <div className="modal">
            <div className="modal-title"> Score: {score} </div>
            <div onClick={()=>window.location="/"} className="modal-btn"> start again </div>
        </div>
    )
}

export default Modal;