import { useState } from 'react';
import { createContext } from 'react'

type AuthContextProps = {
  user: {
    user: {
      uid: number
    }
  },
  setUser: (user: any) => void;
}

type AuthContextProviderprops = {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({children}: AuthContextProviderprops){
  const [user, setUser] = useState<any>({});

  return (
    <AuthContext.Provider 
    value={{
      user,
      setUser
    }}
    >
      {children}
    </AuthContext.Provider>
  )
} 