import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  menuTitle: {
    marginVertical: 20,
    fontSize: 18,
    letterSpacing: 0.7,
    fontWeight: 'bold',
  },
})
