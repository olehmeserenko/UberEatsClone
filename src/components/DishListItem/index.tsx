import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { NavigationProps } from '../../navigation/types'
import { DishListItemPropsType } from './types'

export const DishListItem: FC<DishListItemPropsType> = ({ dish }) => {
  const navigation = useNavigation<NavigationProps>()
  return (
    <Pressable
      onPress={() => navigation.navigate('Dish', { id: dish.id })}
      style={styles.container}
    >
      <View style={styles.subContainer}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price.toFixed(2)}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  subContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
})
