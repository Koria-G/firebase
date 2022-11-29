import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from 'firebase/auth'

export const Navbar=()=>{
  const [user]=useAuthState(auth);

  const signUserOut= async()=>{
    await signOut(auth);

  }

  return(
    <div className='navbar'>
      <div className='links'> 
        <Link to='/'>首页</Link>
        {!user?
          (<Link to='/login'>登录</Link>):
          (<Link to='/createpost'>Create Post</Link>)
        }
      </div>

      <div className='user'>
        {user&&(
        <>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL||""} alt="" width={100} height={100}/>
          <button onClick={signUserOut}>Login out</button>
        </>)}
      </div>
    </div>
  )
}