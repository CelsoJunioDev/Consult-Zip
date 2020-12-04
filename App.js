import React from 'react'
import { View, Text } from 'react-native'
import Home from './src/pages/Home'
import Header from './src/components/Header'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Home/>
    </View>
  )
}
