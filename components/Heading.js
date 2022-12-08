import React from "react";
import Styles from "../styles/style";
import {View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Heading = (props)=>{
    return(
        <View style={Styles.Top}>
            {/* <Ionicons name="bicycle" size={70} style={{color: 'black'}} /> */}
            <Text style={Styles.TopText}>{props.title}</Text>
        </View>
    )
}

export default Heading