import React from "react"
import { AuthProvider, useAuth } from "./src/context/AuthContext"
import { PostsProvider } from "./src/context/PostsContext"
import { ThemeProvider } from "./src/context/ThemeContext"

import LoginScreen from "./src/components/LoginScreen"
import MainScreen from "./src/components/MainScreen"

function AppContent() {

  const { user, loading } = useAuth()

  if (loading) return null

  return user ? <MainScreen /> : <LoginScreen />
}

export default function App() {

  return (
    <AuthProvider>
      <PostsProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </PostsProvider>
    </AuthProvider>
  )
}