import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BasketDishItemPropsType } from './types'

export const BasketDishItem: FC<BasketDishItemPropsType> = ({
  dish,
  quantity,
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{quantity}</Text>
      </View>
      <Text style={styles.dishName}>{dish.name}</Text>
      <Text style={styles.price}>${dish.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  price: {
    marginLeft: 'auto',
  },
  dishName: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
})
