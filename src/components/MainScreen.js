import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getPosts } from "../services/api"
import { useFetch } from "../hooks/useFetch"

function MainScreen({ onLogout }) {

  const { data, loading, error } = useFetch(getPosts)

  console.log(data)

  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIn")
    onLogout()
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome User</Text>

      <Text style={{color:"white"}}>
        Posts Loaded: {data.length}
      </Text>

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
    borderRadius: 6,
    marginTop:20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
})