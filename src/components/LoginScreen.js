import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useAuth } from "../context/AuthContext"

function LoginScreen() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login } = useAuth()

  const handleLogin = async () => {

    if (email === "") {
      setError("Email required")
      return
    }

    if (password === "") {
      setError("Password required")
      return
    }

    setError("")

    await login(email, password)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      {error !== "" && (
        <Text style={styles.error}>{error}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },

  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 6
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10
  }

})