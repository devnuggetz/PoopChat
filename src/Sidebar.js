import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChats from './SidebarChats';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user },dispatch]= useStateValue();
    const [rooms, setRooms]= useState([]);
    useEffect(()=>{
        const unsubscribe=db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc=>
                ({
                    id: doc.id,
                    data: doc.data(),
                })
                ))
        ))
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user?.photoURL} />
                <div className='sidebar__headerRight'>
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
                 
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                <SearchOutlinedIcon />
                <input placeholder='Search' type='text'>

                </input>
                </div>
                
            </div>
            <div className='sidebar__chats'>
                <SidebarChats addNewChat/>
                {rooms.map(room=>(
                    <SidebarChats key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
