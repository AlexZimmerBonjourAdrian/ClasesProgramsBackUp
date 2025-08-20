import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GeneratorScreen from '../screens/GeneratorScreen';

export type RootStackParamList = {
  Home: undefined;
  Generator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Generator"
          component={GeneratorScreen}
          options={{
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: { opacity: current.progress },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


