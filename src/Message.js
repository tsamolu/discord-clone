import React from 'react';
import {Avatar} from "@material-ui/core";
import "./Message.css"

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Sonny <span className="message__timestamp">this is a time stamp</span></h4>
                <p>This is the message</p>

            </div>
        </div>
    )
}

export default Message
