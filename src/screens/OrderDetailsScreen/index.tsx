import { FC } from 'react'
import { FlatList } from 'react-native'
import { BasketDishItem } from '../../components/BasketDishItem'
import { Dish } from '../../components/DishListItem/types'
import { OrderDetailsHeader } from './OrderDetailsScreenHeader'
import { OrderDetailsScreenPropsType } from './types'
import { restaurants } from '../../../assets/data/restaurants'

export const OrderDetailsScreen: FC<OrderDetailsScreenPropsType> = ({
  order,
}) => {
  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={restaurants[0].dishes}
      renderItem={({ item }) => (
        <BasketDishItem dish={item as Dish} quantity={2} />
      )}
    />
  )
}
