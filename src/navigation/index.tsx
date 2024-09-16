import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { CreateItemScreen, EditItemScreen } from 'screens/groceries/create';

import { MainStackParams } from './types';
import { TabsStackScreen } from './stacks';

const MainStack = createNativeStackNavigator<MainStackParams>();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Home" component={TabsStackScreen} />

        <MainStack.Screen
          name="CreateItem"
          component={CreateItemScreen}
          options={{ headerShown: true, title: 'Create Item', headerLargeTitle: true }}
        />
        <MainStack.Screen
          name="EditItem"
          component={EditItemScreen}
          options={{ headerShown: true, title: 'Edit Item', headerLargeTitle: true }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
