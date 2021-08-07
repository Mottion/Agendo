import { createContext } from 'react'

type CalendarContextProps = {

}

type CalendarContextProviderprops = {
  children: React.ReactNode;
}

export const CalendarContext = createContext({} as CalendarContextProps);

export function CalendarContextProvider({children}: CalendarContextProviderprops){
  return (
    <CalendarContext.Provider value={{
      
    }}>
      {children}
    </CalendarContext.Provider>
  )
}