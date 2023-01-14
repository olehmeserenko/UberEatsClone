import { Dish } from '../DishListItem/types'

export interface RestaurantItemPropsType {
  restaurant: Restaurant
}

export interface Restaurant {
  id: string
  name: string
  deliveryFee: number
  minDeliveryTime: number
  maxDeliveryTime: number
  rating: number
  image: string
  dishes: Dish[]
}
