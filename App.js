import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import StackRoute from "./navigation/navigation"
import TabRoute from "./navigation/TabNavigation";

const App = ()=>{
  return(
    <NavigationContainer>
      <TabRoute />
    </NavigationContainer>
  );
};

export default App