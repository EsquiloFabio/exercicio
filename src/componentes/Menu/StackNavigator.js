import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import About from './About';



const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
  );
}

export {MainStackNavigator};











































