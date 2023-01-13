/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ProfileScreen from '../screens/ProfileScreen';

export type tabParam = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<tabParam>();
interface Props {
  name: string;
  component: any;
}
const BottomTabNavigatore: React.FC<Props> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="profileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigatore;
