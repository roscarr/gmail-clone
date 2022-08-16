import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from '../firebase'
import './Login.css'

function Login() {
    const dispatch=useDispatch()
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        }).catch(error=>alert(console.log(error)))
    }
  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://infosertecblog.files.wordpress.com/2021/07/gmail-logo-mundocuentas.jpg" alt="" />
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login
