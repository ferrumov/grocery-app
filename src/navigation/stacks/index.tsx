import { ComponentProps } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InfoScreen } from 'screens/info';
import { ListScreen } from 'screens/groceries/list';

import { HomeStackProps } from '../types';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackProps>();
const InfoStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
      }}
    >
      <HomeStack.Screen name="List" component={ListScreen} options={{ headerTitle: 'List' }} />
    </HomeStack.Navigator>
  );
};

const InfoStackScreen = () => {
  return (
    <InfoStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: false,
      }}
    >
      <InfoStack.Screen
        name="Information"
        component={InfoScreen}
        options={{ headerTitle: 'Information' }}
      />
    </InfoStack.Navigator>
  );
};

export const TabsStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({ color, size }) => {
          let iconName: ComponentProps<typeof Ionicons>['name'] = 'list-outline';

          switch (route.name) {
            case 'HomeTab': {
              iconName = 'list-sharp';
              break;
            }

            case 'InformationTab': {
              iconName = 'information-circle-sharp';
              break;
            }
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="InformationTab" component={InfoStackScreen} />
    </Tab.Navigator>
  );
};
