import { auth,provider } from "../config/firebase"
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
export const Login=()=>{
const navigater=useNavigate()

  const signInWithGoogle= async ()=>{
    const result = await signInWithPopup(auth,provider)
  }
  return(
  <div>
    <p>Sign in Google page!</p>
    <button onClick={signInWithGoogle}>Sign with google</button>

  </div>)
}