import { FlatList, StyleSheet, View } from 'react-native'
import { restaurants } from '../../../assets/data/restaurants'
import { RestaurantItem } from '../../components/RestaurantItem'
import { Restaurant } from '../../components/RestaurantItem/types'

export const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem restaurant={item as Restaurant} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
})
