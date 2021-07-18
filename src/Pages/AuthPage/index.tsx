import { useContext } from 'react';
import { firebase, provider } from '../../Services/Firebase';
import { AuthContext } from '../../Context/AuthContext'
import { useHistory } from 'react-router-dom'

import { Container } from './styles';
import {Twitter, Facebook, Linkedin, Github, Discord, Google} from 'styled-icons/boxicons-logos'

function AuthPage() {
  const {setUser, user} = useContext(AuthContext)
  const history = useHistory();

  function Auth() {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      setUser(result);
    }).catch((error) => {
      console.log('erro')
    });
  }


  function isLoggin() {
    if(user?.user) {
      console.log(user);
      history.push("/Home")
    }else{
      history.push("/")
      console.log('nao tem user')
    }
  }
  isLoggin();

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
          <div className="button" onClick={Auth}>
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
