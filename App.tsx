import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import "./global.css"

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text className='text-red-600 font-semibold text-xl'>App</Text>
      </SafeAreaView>

    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})