import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";


// esse componente é insivisel, só existe para cuidar do roteamento para que o usuario esteja na Pagina de login
// caso ele não estiver logado, e na Home, caso ele estiver logado.(talvez isso seja uma gambiarra ._.) 

export function Redirect() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  
  useEffect( () =>  {
    if(user){history?.push('/Home')}else{history?.push('/')};
  }, [user, history])

  return (
    <div style={{display: 'none'}}></div>
  )
}