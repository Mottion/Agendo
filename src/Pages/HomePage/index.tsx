import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import DataInput from '../../Components/DataInput'

import { Container } from './styles';

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
      </div>
    </Container>
  );
};

export default HomePage;
