import { StyleSheet, View } from 'react-native'
import { RestaurantDetailsScreen } from './src/screens/RestaurantDetailsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetailsScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
