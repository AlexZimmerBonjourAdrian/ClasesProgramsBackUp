import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GeneratorScreen from '../screens/GeneratorScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './AppNavigator';
import { Text } from 'react-native';

type TabsParamList = {
  Concept: undefined;
  Writer: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const GeneratorTabs: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Tabs'>>();
  const initialTab = route.params?.initialTab ?? 'Concept';

  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Concept"
        options={{ tabBarLabel: 'Concept Art' }}
      >
        {() => <GeneratorScreen mode="concept" />}
      </Tab.Screen>
      <Tab.Screen
        name="Writer"
        options={{ tabBarLabel: 'Writer' }}
      >
        {() => <GeneratorScreen mode="writer" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default GeneratorTabs;


