import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "./src/navigation/type/type";
import MainScreen from "./src/screens/main_screen";
import RatingScreen from "./src/screens/ratings/rating_screen";
import SelectNumberScreen from "./src/screens/select_number/select_number_screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}} >
       <Stack.Screen  name="Main" component={MainScreen} />
       <Stack.Screen name="Rating" component={RatingScreen}  />
       <Stack.Screen  name="SelectNumber" component={SelectNumberScreen}  />
      </Stack.Navigator>
      {/* <Stack.Navigator id="1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SelectNumber" component={SelectNumberScreen}/>
      </Stack.Navigator> */}

    </NavigationContainer>
  );
}

export default App;

