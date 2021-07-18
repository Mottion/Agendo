import { AuthContextProvider } from './Context/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './GlobalStyle/GlobalStyle';

import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>

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
