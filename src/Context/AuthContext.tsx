import { useState,useEffect } from 'react';
import { createContext } from 'react'
import { firebase, provider } from '../Services/Firebase';

type User = {
  id: string,
  name: string;
  avatar: string;
}

type AuthContextProps = {
  user:  User | undefined ,
  setUser: (user: User) => void,
  Login: () => void;
  Logout: () => void;
}

type AuthContextProviderprops = {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({children}: AuthContextProviderprops){
  const [user, setUser] = useState<User>();

  async function Login() {
    const userData: any = await firebase.auth().signInWithPopup(provider);
    setUser({
      id: userData.user.uid,
      name: userData.user.displayName,
      avatar: userData.user.photoURL,
    });
  }

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
  }, []);

  function Logout() {
    firebase.auth().signOut().then(() => {
      console.log("Sign-out successful")
    }).catch((error) => {
      console.log("Sign-out with error: " + error)
    });;
    setUser(undefined);
  } 


  return (
    <AuthContext.Provider 
    value={{
      user,
      setUser,
      Login,
      Logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  )
} 