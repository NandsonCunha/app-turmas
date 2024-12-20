import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/home"
import Turma from "./src/pages/turma"
import NovaTurma from "./src/pages/novaTurma"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>

      <Stack.Screen name="Turma" component={Turma} options={{ headerShown: false }}/>

      <Stack.Screen name="NovaTurma" component={NovaTurma} options={{ headerShown: false }}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}