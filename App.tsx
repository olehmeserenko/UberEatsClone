import { StyleSheet, View } from 'react-native'
import { OrdersScreen } from './src/screens/OrdersScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <OrdersScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
