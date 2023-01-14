export interface DishListItemPropsType {
  dish: Dish
}

export interface Dish {
  id: string
  name: string
  description: string
  price: number
  image: string
}
