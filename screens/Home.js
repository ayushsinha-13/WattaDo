import React from "react"
import {View} from 'react-native'
import Heading from "../components/Heading"
import StartButton from "../components/StartButton"
import Styles from "../styles/style"


const Home = ({navigation})=>{
  return(
    <View style={Styles.Container}>

      <Heading title={"WattaDo"}/>
      <StartButton nav={navigation} />

    </View>
  )
}


export default Home