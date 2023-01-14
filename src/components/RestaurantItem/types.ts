export interface RestaurantItemPropsType {
  restaurant: Restaurant
}

interface Dish {
  name: string
  description: string
  price: number
  image: string
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
