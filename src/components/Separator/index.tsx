import { StyleSheet, View } from 'react-native'

export const Separator = () => {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
})
