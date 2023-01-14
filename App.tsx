import { StyleSheet, View } from 'react-native'
import { DishDetailsScreen } from './src/screens/DishDetailsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <DishDetailsScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
