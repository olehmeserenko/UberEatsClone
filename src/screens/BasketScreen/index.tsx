import { FlatList, StyleSheet, Text, View } from 'react-native'

import { restaurants } from '../../../assets/data/restaurants'
import { BasketDishItem } from '../../components/BasketDishItem'
import { Dish } from '../../components/DishListItem/types'

const restaurant = restaurants[0]

export const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.title}>Your items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => (
          <BasketDishItem dish={item as Dish} quantity={2} />
        )}
      />
      <View style={styles.separator} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 40,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 19,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
})
