import { FlatList, StyleSheet } from 'react-native'
import { restaurants } from '../../../assets/data/restaurants'
import { RestaurantItem } from '../../components/RestaurantItem'
import { Restaurant } from '../../components/RestaurantItem/types'

export const HomeScreen = () => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => (
        <RestaurantItem restaurant={item as Restaurant} />
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({})
