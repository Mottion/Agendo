import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthContext';

import DataInput from '../../Components/DataInput'
import { Button } from '../../Styles/Button'


function MainSidebar() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="profileWrapper">
        <img src={user?.avatar} alt="imagem do usuario" />
        <span>{user?.name}</span>
      </div>
      <DataInput />
      <Button as={Link} className="blue" to="/Home/Calendar">Adicionar Evento</Button>
      <Button as={Link} className="green" to="/">Adicionar Timer</Button>
    </>
  );
};

export default MainSidebar;
