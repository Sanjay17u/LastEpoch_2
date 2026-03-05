import React, { useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getPosts } from "../services/api"

function MainScreen({ onLogout }) {

  const loadPosts = async () => {

  const posts = await getPosts()

  console.log(posts)

  }
  
  useEffect(() => {
  loadPosts()
}, [])

  const handleLogout = async () => {
  await AsyncStorage.removeItem("isLoggedIn")
  onLogout()
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome User</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  title: {
    color: "white",
    fontSize: 28,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#ff4444",
    padding: 14,
    borderRadius: 6
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
})