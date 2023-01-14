import { FC } from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import { OrderDetailsScreenPropsType } from './types'

export const OrderDetailsHeader: FC<OrderDetailsScreenPropsType> = ({
  order,
}) => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  )
}
