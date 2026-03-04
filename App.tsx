import React, { useState, useEffect } from 'react'
import LoginScreen from "./src/components/LoginScreen"
import MainScreen from "./src/components/MainScreen"
import AsyncStorage from '@react-native-async-storage/async-storage'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkLoginStatus()
  }, [])

  const checkLoginStatus = async () => {
    const value = await AsyncStorage.getItem("isLoggedIn")

    if (value === "true") {
      setIsLoggedIn(true)
    }

    setLoading(false)
  }

  if (loading) {
    return null
  }

  if (isLoggedIn) {
    return <MainScreen onLogout={() => setIsLoggedIn(false)} />
  }

  return <LoginScreen onLogin={() => setIsLoggedIn(true)} />

}

export default App