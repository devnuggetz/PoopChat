import React, { useState, useEffect } from 'react'
import './SidebarChats.css'
import { Avatar } from '@material-ui/core'

function SidebarChats({addNewChat}) {

    const [seed, setSeed]= useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat= ()=>{
        const roomName= prompt("Please enter name for chat");
        if(roomName) {
            // do something
        }
        
    }
    return !addNewChat ?(
        <div className='sidebarChats'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChats__info'>
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className='sidebarChats'>
            <h2>Create new Chat</h2>
        </div>
    );
}

export default SidebarChats
