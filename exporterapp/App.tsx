import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAccount from './pages/register.pages/useracc.pages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserAccount">
        <Stack.Screen name="UserAccount" component={UserAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
