import { createContext, FC, useContext, useEffect, useState } from 'react'

import { Auth, DataStore } from 'aws-amplify'

import { User } from '../models'
import { AuthContextPropsType, AuthContextProviderPropsType } from './types'

const AuthContext = createContext<AuthContextPropsType>({
  authUser: null,
  dbUser: null,
  sub: '',
  setDbUser: () => {},
})

export const AuthContextProvider: FC<AuthContextProviderPropsType> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [dbUser, setDbUser] = useState<User | null>(null)

  // @ts-ignore
  const sub = authUser?.attributes.sub

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser)
  }, [])

  const fetchUser = async () => {
    const user = (await DataStore.query(User)).filter(
      (user) => user.sub === sub,
    )
    setDbUser(user[0])
  }

  useEffect(() => {
    fetchUser()
  }, [sub])

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
