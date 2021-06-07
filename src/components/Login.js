import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from '../firebase'
import {actionTypes} from '../reducer'
import { useStateValue } from '../StateProvider'

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
      console.log(result)
    }).catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
        src="https://www.pngarts.com/files/10/Facebook-Logo-PNG-Pic.png"
        alt="Facebook Icon"
        />
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
        alt="Facebook Text Logo"
        className="login__text"
        />
      </div>
      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
