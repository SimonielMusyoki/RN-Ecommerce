import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductList, ProductDetails,LoadingScreen } from './screens';
import Tabs from './navigation/bottomTabs'

const App = () => {
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fontsLoaded){
    return <LoadingScreen />
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false}} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;