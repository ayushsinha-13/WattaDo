import React from "react";
import Styles from "../styles/style";
import {View, Text} from 'react-native'

const Footer = ()=>{
    return(
        <View style={Styles.FooterContainer}>
            <Text style={Styles.FooterText}>Bryant Apps © Copyright 2022</Text>
        </View>
    )
}

export default Footer