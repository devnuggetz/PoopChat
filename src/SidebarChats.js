import React, { useState, useEffect } from 'react'
import './SidebarChats.css'
import { Avatar } from '@material-ui/core'
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChats({id, name, addNewChat}) {
    const [seed, setSeed]= useState('');
    const [messages, setMessages]= useState("");
    useEffect(()=>{
        if(id){
             db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map((doc)=> doc.data()))
             ))
        }
    },[ ])

    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat= ()=>{
        const roomName= prompt("Please enter name for chat");
        if(roomName) {
            // do something
            db.collection('Rooms').add({
                Name: roomName,
            })
        }
        
    }
    return !addNewChat ?(
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChats'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className='sidebarChats__info'>
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
        
    ) : (
        <div onClick={createChat}
        className='sidebarChats'>
            <h2>Create new Chat</h2>
        </div>
    );
}
export default SidebarChats
