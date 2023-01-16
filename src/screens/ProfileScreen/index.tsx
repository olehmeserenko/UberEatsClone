import { useNavigation } from '@react-navigation/native'
import { Auth, DataStore } from 'aws-amplify'
import { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'
import { useAuthContext } from '../../context/AuthContext'
import { User } from '../../models'

export const ProfileScreen = () => {
  const { dbUser, sub, setDbUser } = useAuthContext()

  const [name, setName] = useState(dbUser?.name || '')
  const [address, setAddress] = useState(dbUser?.address || '')
  const [lat, setLat] = useState(dbUser?.lat.toString() || '0')
  const [lng, setLng] = useState(dbUser?.lng.toString() || '0')

  const navigation = useNavigation()

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        }),
      )
      setDbUser(user)
    } catch (error) {
      console.log('Error saving user', error)
    }
  }

  const updateUser = async () => {
    if (!dbUser) return

    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.name = name
        updated.address = address
        updated.lat = parseFloat(lat)
        updated.lng = parseFloat(lng)
      }),
    )
    setDbUser(user)
  }

  const onSave = async () => {
    if (dbUser) {
      await updateUser()
    } else {
      await createUser()
    }
    navigation.goBack()
  }

  const signOut = () => {
    Auth.signOut()
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Text onPress={signOut} style={styles.signOut}>
        Sign out
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  signOut: {
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
})
