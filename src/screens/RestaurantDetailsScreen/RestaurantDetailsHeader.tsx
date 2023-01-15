import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { DEFAULT_IMAGE } from '../../constants'

import { styles } from './styles'
import { RestaurantDetailsScreenHeaderPropsType } from './types'

export const RestaurantDetailsHeader: FC<
  RestaurantDetailsScreenHeaderPropsType
> = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri:
            restaurant.image.startsWith('http') ||
            restaurant.image.startsWith('https')
              ? restaurant.image
              : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226;{' '}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  )
}
