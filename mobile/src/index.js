import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const style = StyleSheet.create({
    container: {
      height: '100%',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7159c1'
    },
    text: {
      fontSize: 25,
      color: '#ffffff'
    }
  })
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.text}>Just GoStack!</Text>
      </View>
    </SafeAreaView>
  )
}