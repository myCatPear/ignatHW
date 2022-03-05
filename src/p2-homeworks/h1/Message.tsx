import React from 'react'
import classes from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.messageForm}>
            <div className={classes.messageForm__wrapper}>
                <div className={classes.messageForm__avatar}>
                    <img src={props.avatar} alt="photo" className={classes.messageForm__img}/>
                </div>
                <div className={classes.messageForm__data}>
                    <h3 className={classes.messageForm__name}>{props.name}</h3>
                    <p className={classes.messageForm__message}>{props.message}</p>
                    <span className={classes.messageForm__time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
