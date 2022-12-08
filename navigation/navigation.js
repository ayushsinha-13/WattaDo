import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from '../screens/Home'
import Fact from '../screens/Fact'

const Stack = createStackNavigator();


const StackRoute = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Fact" component={Fact} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default StackRoute