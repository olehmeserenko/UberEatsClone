import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { OrderListItemPropsType } from './types'

export const OrderListItem: FC<OrderListItemPropsType> = ({ order }) => {
  return (
    <View style={styles.row}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.price}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
  },
})