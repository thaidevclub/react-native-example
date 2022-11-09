import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SanonScreen from './src/screens/SanonScreen';
import GeorgeScreen from './src/screens/GeorgeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sanon" component={SanonScreen} />
        <Stack.Screen name="George" component={GeorgeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;