// importações externas
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// componente criado apenas para rotear o usuario
import { Redirect } from "./Components/Oters/Redirect";

// importações internas
import { AuthContextProvider } from './Context/AuthContext';

// importaçõo de estilos
import GlobalStyle from './Styles/GlobalStyle';

// importação de paginas 
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage';

function App() {

  return (
    <>
      <AuthContextProvider>
        <Router>
          <Redirect />
          <Switch>
            <Route exact path="/" children={<AuthPage />} />
            <Route path="/Home" children={<HomePage />} />
          </Switch>
        </Router>
      </AuthContextProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
