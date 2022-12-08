import React from "react";
import Styles from "../styles/style";
import {View, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const StartButton = (props)=>{
    return(
        <View style={Styles.StartButtonContainer}>
                <TouchableOpacity onPress={() => props.nav.navigate("Fact")}>
                    <View style={Styles.StartButton}>
                        <Ionicons style={Styles.StartLogo} name="power" size={110} />
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default StartButton