import React, {ChangeEvent, useState} from 'react'
import Message from "./Message";
import classes from "./Message.module.css"

function AlternativeMessage() {

    const [message, setMessage] = useState('')

    const [dataMessages, addMessagesToData] = useState([{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Denis',
        message: "I'm the best",
        time: '22:00',
    }])


    const inputMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        addMessagesToData([...dataMessages, {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Denis',
            message: message,
            time: new Date().toLocaleString()
        }])
        setMessage('')
    }


    return (
        <div className={classes.main}>

            {dataMessages.map((d,i) => <Message key={i} avatar={d.avatar} name={d.name} message={d.message} time={d.time}/>)}
            <div className={classes.formInput}>
                <input value={message} onChange={inputMessageHandler}/>
                <button onClick={sendMessageHandler}>Send</button>
            </div>


        </div>
    )
}

export default AlternativeMessage
