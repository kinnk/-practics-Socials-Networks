import React from "react";
//style
import style from './dialogs.module.scss'
import Dialog from "../../components/messages/dialogs";
import Message from "../../components/messages/messages";

const Dialogs = (props) =>{
    return(
    <div className={style.container}>
        <div className={style.dialogs}>
            <Dialog dialogs  = {props.dialogs}/>
        </div>
        <div className={style.messages}>
            <Message messages = {props.messages} />
        </div>
    </div>
    )
}

export default Dialogs;