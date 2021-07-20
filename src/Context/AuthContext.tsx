import { useState,useEffect } from 'react';
import { createContext } from 'react'
import { firebase } from '../Services/Firebase';

type User = {
  id: string,
  name: string;
  avatar: string;
}

type AuthContextProps = {
  user:  User | undefined ,
  setUser: (user: User) => void,
}

type AuthContextProviderprops = {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({children}: AuthContextProviderprops){
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid } = user;
  
        if (!displayName || !photoURL){
          throw new Error('Missing information from Google Account');
        }  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])


  return (
    <AuthContext.Provider 
    value={{
      user,
      setUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
} 