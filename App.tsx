import { NavigationContainer } from "@react-navigation/native";
import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, View } from 'react-native';
import NavbarDefaultComponent from "./src/components/navbars/nav_component/navbar_default_components";
import MainScreen from "./src/screens/main_screen";
import { colors } from "./src/utils/import/import_options";

const App = () => {
  return (

    <NavigationContainer>
      <MainScreen />

    </NavigationContainer>
  );
}

export default App;

