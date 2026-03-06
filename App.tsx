import React from "react"
import { useAuth } from "./src/context/AuthContext"
import { AppProvider } from "./src/providers/AppProvider"

import LoginScreen from "./src/components/LoginScreen"
import MainScreen from "./src/components/MainScreen"

function AppContent() {

  const { user, loading } = useAuth()

  if (loading) return null

  return user ? <MainScreen /> : <LoginScreen />
}

export default function App() {

  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )

}