import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GeneratorTabs from './GeneratorTabs';

export type RootStackParamList = {
  Home: undefined;
  Tabs: { initialTab: 'Concept' | 'Writer' } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={GeneratorTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


