import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
function Header() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  const signOut=()=>{
    auth.signOut().then(()=>{
     dispatch(logout())
    })
  }
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src="https://i.pinimg.com/originals/d7/4e/60/d74e6036cb5b6e80d87b0a3fc77176c0.png" alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon/>
        <input type="text" placeholder='Search mail'/>
        <ArrowDropDownIcon className='header__inputCarret'/>
      </div>
      <div className="header__right">
         <IconButton>
            <AppsIcon/>
        </IconButton>
         <IconButton>
            <NotificationsIcon/>
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  )
}

export default Header
