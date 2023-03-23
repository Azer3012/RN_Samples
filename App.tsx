import { StyleSheet, } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native'
import Stacks from './app/Stacks/Stacks'
import AppStack from './app/Stacks/AppStack'

const App = () => {
  return (
    <NavigationContainer>

      {/* <AppStack /> */}

      <Stacks />

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})