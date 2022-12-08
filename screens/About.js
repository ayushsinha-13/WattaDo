import { View } from 'react-native'
import Styles from '../styles/style'
import React from 'react'
import Heading from '../components/Heading'
import AppName from '../components/AppName'

const About = (navigation) => {
  return (
    <View style={Styles.Container}>
      <Heading title={"About"}/>
      <AppName />
    </View>
  )
}

export default About