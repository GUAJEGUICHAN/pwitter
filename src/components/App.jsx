import React, { useState } from 'react'
import '../css/app.css';
import AppRouter from "./AppRouter"
import { authService } from "../fbInstance";

function App() {
  console.log(authService.getAuth().currentUser)
  console.log("test")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <h1>
      Welcome To Pwitter
      <AppRouter />
    </h1>
  );
}

export default App;
