import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../styles/style'

const AppName = () => {
  return (
    <View>
        <View style={Styles.IconContainer}>
            <Image source={require('../assets/images/logo.png')} style={Styles.ImageStyle} resizeMode='contain'/>
        </View>
        <View style={Styles.AppNameContainer}>
            <Text style={Styles.AppNameText}>
                WattaDo developed by "BRYANT APPS".
            </Text>
            <Text style={Styles.AppNameVersion}>
                Version: 2.2
            </Text>
        </View>
    </View>
  )
}

export default AppName