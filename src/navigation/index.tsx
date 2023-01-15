import { FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BasketScreen } from '../screens/BasketScreen'
import { DishDetailsScreen } from '../screens/DishDetailsScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { OrderDetailsScreen } from '../screens/OrderDetailsScreen'
import { OrdersScreen } from '../screens/OrdersScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { RestaurantDetailsScreen } from '../screens/RestaurantDetailsScreen'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name={'home'} size={24} color={color} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={'list-alt'} size={24} color={color} />
          ),
          title: 'Orders',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'user-alt'} size={24} color={color} />
          ),
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  )
}

const OrdersStack = createNativeStackNavigator()

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
    </OrdersStack.Navigator>
  )
}
