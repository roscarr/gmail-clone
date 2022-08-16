import React, { useEffect } from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmailList from './emailList/EmailList';
import Mail from './mail/Mail';
import SendMail from './sendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageisOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './login/Login';
import { auth } from './firebase';

function App() {
  const sendMessageisOpen=useSelector(selectSendMessageisOpen)
  const user=useSelector(selectUser)
  const dispatch=useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
            displayName:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
        }))
      }
    })
  },[])
  return (
    <BrowserRouter>
   {!user ? (<Login/>):
    (<div className="app">
      <Header/>
      <div className="app__body">
         <Sidebar/>
         <Routes>
          <Route path='/mail' element={<Mail/>}/>
          <Route path='/' element={<EmailList/>}/>
         </Routes>
      </div>
      {sendMessageisOpen &&  <SendMail/>}
    </div>)}
    </BrowserRouter>
  );
}

export default App;
