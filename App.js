import React from 'react'
import Add_To_Cart from './Add_To_Cart'
import Online_Shopping from './Online_Shopping'
import Successful_purchase from './Successful_purchase'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Online_Shopping" component={Online_Shopping} options={{ headerShown: false }} />
          <Stack.Screen name="Add_To_Cart" component={Add_To_Cart} options={{ headerShown: false }} />
          <Stack.Screen name="Successful_purchase" component={Successful_purchase} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

