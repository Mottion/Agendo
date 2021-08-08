import { createContext, useState } from 'react'

type CalendarContextProps = {
  date: string;
  setDate: (value: string) => void;
  selectedDay: Date;
}

type CalendarContextProviderprops = {
  children: React.ReactNode;
}

export const CalendarContext = createContext({} as CalendarContextProps);

export function CalendarContextProvider({children}: CalendarContextProviderprops){
  const selectedDay = new Date();
  const [date, setDate] = useState("")
  

  return (
    <CalendarContext.Provider value={{
      date,
      setDate,
      selectedDay
    }}>
      {children}
    </CalendarContext.Provider>
  )
}