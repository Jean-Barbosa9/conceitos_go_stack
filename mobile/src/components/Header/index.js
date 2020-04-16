import React from 'react';
import { Text, View } from 'react-native'
import style from './style';

export default function Header({ title }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>
        {title}
      </Text>
    </View>
  )
}