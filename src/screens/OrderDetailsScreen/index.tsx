import { FlatList } from 'react-native'
import { orders } from '../../../assets/data/orders'
import { restaurants } from '../../../assets/data/restaurants'
import { BasketDishItem } from '../../components/BasketDishItem'
import { OrderDetailsHeader } from './OrderDetailsScreenHeader'

const order = orders[0]

export const OrderDetailsScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem dish={item} quantity={2} />}
    />
  )
}
