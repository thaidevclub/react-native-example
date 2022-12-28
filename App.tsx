import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "./src/navigation/type/type";
import ConsentScreen from "./src/screens/consent/consent_screen";
import MainScreen from "./src/screens/main_screen";
import RatingScreen from "./src/screens/ratings/rating_screen";
import SelectNumberScreen from "./src/screens/select_number/select_number_screen";
import SuccessScreen from "./src/screens/success/success_screen";
import VerificationScreen from "./src/screens/verifications/verification_screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }} >
        <Stack.Group>
          <Stack.Screen key={"Main"} name="Main" component={MainScreen} />
          <Stack.Screen name="Rating" component={RatingScreen} />
          <Stack.Screen name="SelectNumber" component={SelectNumberScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="Consent" component={ConsentScreen} />
          <Stack.Screen name="Success" component={SuccessScreen} />

        </Stack.Group>
        <Stack.Group>
          
        </Stack.Group>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;

