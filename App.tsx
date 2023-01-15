import { NavigationContainer } from '@react-navigation/native'
import { Amplify } from 'aws-amplify'
import { StatusBar } from 'expo-status-bar'

import { withAuthenticator } from 'aws-amplify-react-native'
import { RootNavigator } from './src/navigation'

import config from './src/aws-exports'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  )
}

export default withAuthenticator(App)
