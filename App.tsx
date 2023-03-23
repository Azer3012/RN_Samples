import { StyleSheet, } from 'react-native'
import React from 'react'
import { AuthProvider } from './app/context/AuthContext'
import AppNav from './app/AppNav'

const App = () => {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})