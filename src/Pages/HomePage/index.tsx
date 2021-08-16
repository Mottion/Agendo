import { Switch, Route } from 'react-router-dom';
import { db } from '../../Services/Firebase' 

import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import MainSidebar from '../../Components/MainSidebar'
import FormCalendar from '../../Components/FormCalendar'
import { Container } from './styles';
import { CalendarContextProvider } from '../../Context/CalendarContext';

type Events = {
  eventDate: [number, number, number],
  eventDescription: string,
  eventTime: [string, string],
  eventTitle: string
  userID: string;
}

function HomePage() {
  const { Logout, user } = useContext(AuthContext);
  const [events, setEvents] = useState<Events[]>([])

    db.collection("events").where("userID", "==", `${user?.id}`)
    .onSnapshot((querySnapshot) => {
        var arrayEvents = [] as any;
        querySnapshot.forEach((doc) => {
          arrayEvents.push(doc.data());
        });
        setEvents(arrayEvents)
    });

  return (
    <Container>
      <main>
        <h1>Eventos</h1>
        {events.map((event, index) => (
          <div className="event" key={index}>
            <span>{event.eventTitle}</span>
            <span>{`${event.eventDate[0]}/${event.eventDate[1]}/${event.eventDate[2]}-${event.eventTime[0]}:${event.eventTime[1]}`}</span>
            <p>{event.eventDescription}</p>
          </div>
        ))}
      </main>
      <div className="sidebar">
      <CalendarContextProvider>
        <Switch>
          <Route exact path="/Home/" children={<MainSidebar />} />
          <Route exact path="/Home/Calendar" children={<FormCalendar />}/>
        </Switch>
      </CalendarContextProvider>
        <button className="logout" onClick={Logout}>Sair da Conta</button>
      </div>
    </Container>
  )

};

export default HomePage;
