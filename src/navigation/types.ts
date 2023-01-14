import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
  Restaurants: undefined
  Restaurant: { id: string }
  Dish: { id: string }
  Basket: undefined
  Orders: undefined
  Order: { id: string }
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>

export type RouteProps = RouteProp<RootStackParamList>
