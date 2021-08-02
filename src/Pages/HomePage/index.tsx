import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import DataInput from '../../Components/DataInput'

import { Container } from './styles';
import { Button } from '../../Styles/Button'

function HomePage() {
  const { user } = useContext(AuthContext);


  return (
    <Container>
      <main></main>
      <div className="sidebar">
        <div className="profileWrapper">
          <img src={user?.avatar} alt="imagem do usuario" />
          <span>{user?.name}</span>
        </div>
        <DataInput />
        <Button className="blue">Adicionar Evento</Button>
        <Button className="green">Adicionar Timer</Button>
        <button className="logout">Sair da Conta</button>
      </div>
    </Container>
  );
};

export default HomePage;
