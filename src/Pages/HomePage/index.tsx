import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

import { Container } from './styles';

function HomePage() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Container>
      <span>Home page</span>
    </Container>
  );
};

export default HomePage;
