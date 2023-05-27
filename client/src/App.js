import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SignUpClientePage from './pages/signupcliente';
import SignUpEmpresaPage from './pages/signupempresa';
import PerfilPage from './pages/perfil'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {
  return (
    
    <Router>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
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