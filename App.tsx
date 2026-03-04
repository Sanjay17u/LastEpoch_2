import React, { useState } from 'react'
import LoginScreen from "./src/components/LoginScreen"
import MainScreen from "./src/components/MainScreen"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn) {
    return <MainScreen />
  }

  return <LoginScreen onLogin={() => setIsLoggedIn(true)} />

}

export default App