import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import { DishListItem } from '../../components/DishListItem'
import { Dish, Restaurant } from '../../models'
import { NavigationProps, RouteProps } from '../../navigation/types'
import { RestaurantDetailsHeader } from './RestaurantDetailsHeader'

import { DataStore } from 'aws-amplify'
import { styles } from './styles'

export const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [dishes, setDishes] = useState<Dish[]>([])
  const route = useRoute<RouteProps>()
  const navigation = useNavigation<NavigationProps>()

  const { id } = route.params as { id: string }

  const fetchRestaurant = async (id: string) => {
    const response = await DataStore.query(Restaurant, id)

    // temporary solution to get dishes for a restaurant (need to be fixed)
    const dishes = (await DataStore.query(Dish)).filter(
      (i) => i.restaurantID === id,
    )

    if (response) {
      setRestaurant(response)
      setDishes(dishes)
    }
  }

  useEffect(() => {
    if (!id) {
      return
    }
    fetchRestaurant(id)
  }, [id])

  if (!restaurant) {
    return <ActivityIndicator size={'large'} color={'gray'} />
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={
          <RestaurantDetailsHeader restaurant={restaurant} />
        }
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
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
