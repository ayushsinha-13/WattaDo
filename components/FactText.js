import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../styles/style'

const FactText = (props) => {
  return (
    <View style={Styles.FactTextContainer}>
      <Text style={Styles.FactText}>{props.text}.</Text>
    </View>
  )
}

export default FactText