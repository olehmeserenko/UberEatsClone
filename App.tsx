import { StyleSheet, View } from 'react-native'
import { BasketScreen } from './src/screens/BasketScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <BasketScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
