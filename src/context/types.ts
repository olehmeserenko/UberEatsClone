import { User } from '../models'

export interface AuthContextProviderPropsType {
  children: React.ReactNode
}

export interface AuthContextPropsType {
  authUser: User | null
  dbUser: User | null
  sub: string
  setDbUser: (user: User) => void
}
