import React, { Fragment } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <SafeAreaView style={style.container}>
        <Text style={style.text}>Just GoStack!</Text>
      </SafeAreaView>
    </Fragment>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
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