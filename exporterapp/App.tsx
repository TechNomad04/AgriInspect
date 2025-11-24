import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAccount from './pages/register.pages/useracc.pages';
import OrganizationDetails from './pages/register.pages/organizationdetails.pages';
import DocumentUploads from './pages/register.pages/documentuploads';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserAccount">
        <Stack.Screen name="UserAccount" component={UserAccount} />
        <Stack.Screen name="OrganizationDetails" component={OrganizationDetails} />
        <Stack.Screen name="DocumentUploads" component={DocumentUploads} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
