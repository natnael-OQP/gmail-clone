import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle';
import  HomePage  from './pages/HomePage';
import {useDispatch, useSelector } from 'react-redux'
import { login, logout, SelectUser } from './features/userSlice';
import Login from './component/Login/Login';
import { auth } from './database/firebase';

function App() {
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          id: user.uid,
          email:user.email,
          displayName: user.displayName,
          photo:user.photoURL,
        }) )
      }
      else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <>
      <GlobalStyle/>
      {
        user ? <HomePage /> : <Login />
      }
    </>
  );
}

export default App;
