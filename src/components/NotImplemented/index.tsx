import { StyleSheet, Text, View } from 'react-native'

export const NotImplemented = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>This feature is on progress...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
