import { Ionicons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, View } from 'react-native'
import { restaurants } from '../../../assets/data/restaurants'

const [restaurant] = restaurants

export const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Ionicons
        name={'arrow-back-circle'}
        size={45}
        color={'white'}
        style={styles.icon}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
  },
  container: {
    margin: 10,
  },
})
