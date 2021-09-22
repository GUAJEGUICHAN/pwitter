import React, { useEffect, useState } from 'react'
import '../css/app.css';
import AppRouter from "./AppRouter"
import { authService } from "../fbInstance";


function App() {
  //로그인 됐는지 초기화 됐는지 입력하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(authService.getAuth(),
      (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setInit(true);
      })
  }, []);


  return (
    <h1>
      Welcome To Pwitter
      <AppRouter isLoggedIn={isLoggedIn} />
    </h1>
  );
}

export default App;
