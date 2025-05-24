import React from 'react';
import { createComponentForStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Page from './page';
import welcome from './welcome';

const Stack=createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'>
        <Stack.Screen name='Login'
        component={Login}/>
        <Stack.Screen name='Welcome'
        component={welcome}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
