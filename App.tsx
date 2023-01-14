import { StyleSheet, View } from 'react-native'
import { orders } from './assets/data/orders'
import { OrderDetailsScreen } from './src/screens/OrderDetailsScreen'
const order = orders[0]

export default function App() {
  return (
    <View style={styles.container}>
      <OrderDetailsScreen order={order} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
