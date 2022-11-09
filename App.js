import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SanonScreen from './src/screens/SanonScreen';
import KritScreen from './src/screens/KritScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Kritbovorn' component={KritScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sanon" component={SanonScreen} />
        {/* <Stack.Screen name='Kritbovorn' component={KritScreen} options={{ headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;