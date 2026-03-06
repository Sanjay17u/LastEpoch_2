import React, { createContext, useContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkLoginStatus()
  }, [])

  const checkLoginStatus = async () => {

    const value = await AsyncStorage.getItem("isLoggedIn")

    if (value === "true") {
      setUser({ name: "User" })
    }

    setLoading(false)
  }

  const login = async (email, password) => {

    await AsyncStorage.setItem("isLoggedIn", "true")

    setUser({
      email: email
    })
  }

  const logout = async () => {

    await AsyncStorage.removeItem("isLoggedIn")

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}