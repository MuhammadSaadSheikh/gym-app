import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

//Screens
import Home from './src/screen/Home'
import Details from './src/screen/Details'
import SignIn from './src/screen/SignIn'

//Constant
const Stack = createStackNavigator()

const getData = async () => {
  try {
    const value = AsyncStorage.getItem('userData')
  } catch (error) {
    console.log("🚀 ~ file: App.js ~ line 15 ~ getData ~ error", error)
  }
}

function App(){
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: null}} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;
