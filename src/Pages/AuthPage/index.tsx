// importações externas
import { useContext } from 'react';

// importações internas
import { firebase, provider } from '../../Services/Firebase';
import { AuthContext } from '../../Context/AuthContext'

// importaçõo de estilos
import { Container } from './styles';
import {Twitter, Facebook, Linkedin, Github, Discord, Google} from 'styled-icons/boxicons-logos'


function AuthPage() {
  const {setUser} = useContext(AuthContext);

  async function Login() {
    const userData: any = await firebase.auth().signInWithPopup(provider);
    setUser({
      id: userData.user.uid,
      name: userData.user.photoURL,
      avatar: userData.user.displayName,
    });
  }

  return (
    <Container>
      <h2>Adrian Elizandro</h2>
      <div className="social-icons">
        <a href="/"><Twitter /></a>
        <a href="/"><Facebook /></a>
        <a href="/"><Linkedin /></a>
        <a href="https://github.com/Mottion"><Github /></a>
        <a href="/"><Discord /></a>
      </div>
      <main>
        <h1>Faça no seu <span>Tempo</span></h1>
        <div className="wrapper">
        <img src="/StopWatch.svg" alt="stopwatch"/>
          <div className="button" onClick={Login}>
            <Google />
            <span> Login With Google </span>
          </div>
        </div>
      </main>
      <div className="github-link">
        <span>Visite o meu GitHub: </span>
        <a href="https://github.com/Mottion"> https://github.com/Mottion</a>
      </div>
    </Container>
  );
};

export default AuthPage;
