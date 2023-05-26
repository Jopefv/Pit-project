import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SignUpClientePage from './pages/signupcliente';
import SignUpEmpresaPage from './pages/signupempresa';
import PerfilPage from './pages/perfil'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact/>
        <Route path='/signupcliente' component={SignUpClientePage} exact/>
        <Route path='/signupempresa' component={SignUpEmpresaPage} exact/>
        <Route path='/perfil' component={PerfilPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;