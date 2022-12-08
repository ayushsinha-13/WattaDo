import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import About from "../screens/About";
import Ionicons from 'react-native-vector-icons/Ionicons'
import StackRoute from './navigation';

const Tab = createBottomTabNavigator()

const TabRoute = () => {
        return(
            <Tab.Navigator
                initialRouteName="Stack"
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#44A588',
                    },
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#fff',
                }}
            >
            <Tab.Screen 
                name="Stack"
                component={StackRoute}
                options={{
                    headerShown: false,  
                    tabBarLabel: "Home" ,                  
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons
                                name="home"
                                size={30}
                                color={tabInfo.focused ? "black" : "white"}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen 
              name="About" 
              component={About} 
              options={{
                headerShown: false, 
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons
                      name="information-circle"
                      size={30}
                      color={tabInfo.focused ? "black" : "white"}
                    />
                  );
                },
              }}    
            />
          </Tab.Navigator>
        )
    }

export default TabRoute    
