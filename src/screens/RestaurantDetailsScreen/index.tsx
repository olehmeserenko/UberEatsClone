import { FlatList, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { restaurants } from '../../../assets/data/restaurants'
import { DishListItem } from '../../components/DishListItem'
import { Dish } from '../../components/DishListItem/types'
import { Restaurant } from '../../components/RestaurantItem/types'
import { RestaurantDetailsHeader } from './RestaurantDetailsHeader'
import { styles } from './styles'

const [restaurant] = restaurants

export const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={
          <RestaurantDetailsHeader restaurant={restaurant as Restaurant} />
        }
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item as Dish} />}
        showsVerticalScrollIndicator={false}
      />
      <Ionicons
        name={'arrow-back-circle'}
        size={45}
        color={'white'}
        style={styles.icon}
      />
    </View>
  )
}
