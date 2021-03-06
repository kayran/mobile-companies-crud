import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/mainScreen';
import EditScreen from './screens/editScreen';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Listar Empresas" component={MainScreen} />
        <Stack.Screen name="Editar Empresa" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

