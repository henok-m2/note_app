import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My Notes' }}
        />
        <Stack.Screen
          name="AddNote"
          component={AddNoteScreen}
          options={{ title: 'Add a Note' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
