import { FlatList, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import { restaurants } from '../../../assets/data/restaurants'
import { DishListItem } from '../../components/DishListItem'
import { Dish } from '../../components/DishListItem/types'
import { Restaurant } from '../../components/RestaurantItem/types'
import { NavigationProps, RouteProps } from '../../navigation/types'
import { RestaurantDetailsHeader } from './RestaurantDetailsHeader'
import { styles } from './styles'

const [restaurant] = restaurants

export const RestaurantDetailsScreen = () => {
  const route = useRoute<RouteProps>()
  const navigation = useNavigation<NavigationProps>()

  const { id } = route.params as { id: string }
  console.log(id)

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={
          <RestaurantDetailsHeader restaurant={restaurant as Restaurant} />
        }
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item as Dish} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name={'arrow-back-circle'}
        size={45}
        color={'white'}
        style={styles.icon}
      />
    </View>
  )
}
