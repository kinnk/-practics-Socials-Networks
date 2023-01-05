import React from "react";

import style from './messages.module.scss'


const Message = (props) => {
    return (
        <div className={style.messages__item}>
            {props.messages.map((el, key) => (
                <div key={key} className={style.message}>
                    {el.message}
                </div> 
            ))}
        </div>
    )
}

export default Message;