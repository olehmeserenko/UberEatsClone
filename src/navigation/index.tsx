import { FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NotImplemented } from '../components/NotImplemented'
import { BasketScreen } from '../screens/BasketScreen'
import { DishDetailsScreen } from '../screens/DishDetailsScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { OrderDetailsScreen } from '../screens/OrderDetailsScreen'
import { OrdersScreen } from '../screens/OrdersScreen'
import { RestaurantDetailsScreen } from '../screens/RestaurantDetailsScreen'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={NotImplemented} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator()

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: 'white',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={'list-alt'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={NotImplemented}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'user-alt'} size={24} color={color} />
          ),
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
