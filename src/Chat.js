import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
    const [seed, setSeed]= useState();
    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000));
    },[] )
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last Seen at 46</p>
                </div>
                <div className='chat__headerRight'>
                <IconButton>
                <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                <AttachFileIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>

                </div>
            </div>
            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__name'>
                        Drake 
                    </span>
                    Hey yoo
                    <span 
                    className='chat__timestamp'>3.54PM</span>
                    </p>
            </div>
            <div className='chat__footer'>

            </div>
        </div>
    )
}

export default Chat
