import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [ {},dispatch]= useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        } ).catch(error=> alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://www.freepnglogos.com/uploads/poop-png/poop-emojis-archives-jason-graham-4.png'
                 alt='' />
                <div className='login__text'>
                    <h2>Sign in to PoopChat</h2>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                    </Button> 
            </div>
        </div>
    )
}

export default Login
