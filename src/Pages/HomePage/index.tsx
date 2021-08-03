import { Switch, Route } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import MainSidebar from '../../Components/MainSidebar'
import FormCalendar from '../../Components/FormCalendar'
import { Container } from './styles';

function HomePage() {
  const { Logout } = useContext(AuthContext);


  return (
    <Container>
      <main></main>
      <div className="sidebar">
        <Switch>
          <Route exact path="/Home/" children={<MainSidebar />} />
          <Route exact path="/Home/Calendar" children={<FormCalendar />} />
        </Switch>
        <button className="logout" onClick={Logout}>Sair da Conta</button>
      </div>
    </Container>
  )

};

export default HomePage;
