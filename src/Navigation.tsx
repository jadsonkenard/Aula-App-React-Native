import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/icon/Icon';
import { theme } from './shared/themes/themes';
import Orders from './modules/orders';
import Profile from './modules/profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  const renderTabBarIcon = (color: string, route: RouteProp<ParamListBase, string>) => {
      let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Orders':
                iconName = 'cart';
                break;
              default:
                iconName = 'profile';
                break;
            }

            return <Icon size={20} name={iconName} color={color} />
  }

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => renderTabBarIcon(color, route),

          tabBarActiveTintColor: theme.color.mainTheme.primary,
          tabBarInactiveTintColor: theme.color.grayTheme.gray80,
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Orders" component={Orders} options={{ title: 'Pedidos', headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil', headerShown: false}} />

          </Tab.Navigator>
  )
}


const Navigation = () => {
    return (
        <NavigationContainer>
            
            <Stack.Navigator>
                <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }}/>
                <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name={MenuUrl.CREATE_USER} component={CreateUser} options={{ title: 'Criar Usuário' }}/>
                <Stack.Screen name={MenuUrl.HOME} component={TabNavigation} options={{ headerShown: false }}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
export default Navigation