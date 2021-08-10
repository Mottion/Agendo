import { createContext, useState } from 'react'

type dateProps = [
  day: number,
  month: number,
  year: number
]

type CalendarContextProps = {
  date: dateProps | never[];
  // eslint-disable-next-line no-empty-pattern
  setDate: ([]: any) => void;
  selectedDay: Date;
}

type CalendarContextProviderprops = {
  children: React.ReactNode;
}

export const CalendarContext = createContext({} as CalendarContextProps);

export function CalendarContextProvider({children}: CalendarContextProviderprops){
  const [selectedDay] = useState(new Date());
  const [date, setDate] = useState([])
  

  return (
    <CalendarContext.Provider value={{
      date,
      setDate,
      selectedDay,
    }}>
      {children}
    </CalendarContext.Provider>
  )
}