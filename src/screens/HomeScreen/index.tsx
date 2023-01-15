import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { RestaurantItem } from '../../components/RestaurantItem'

import { DataStore } from 'aws-amplify'
import { Restaurant } from '../../models'

export const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  const fetchRestaurants = async () => {
    const response = await DataStore.query(Restaurant)
    setRestaurants(response)
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
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
