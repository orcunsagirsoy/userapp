import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home/HomeScreen';
import UserScreen from './user/UserScreen';

export type RootStack = {
  Home: undefined;
  User: {userId: string};
};

const AppStack = createNativeStackNavigator<RootStack>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="User" component={UserScreen} />
    </AppStack.Navigator>
  );
};
