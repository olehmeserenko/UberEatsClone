import { FlatList, StyleSheet, View } from 'react-native'

import { OrderListItem } from '../../components/OrderListItem'

import { orders } from '../../../assets/data/orders'
import { Separator } from '../../components/Separator'

export const OrdersScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
  },
})
