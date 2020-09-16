import React, { useContext } from 'react';
import {firebaseAuth} from '../src/provider/AuthProvider';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Signin from './components/SignIn';

function App() {
    const { token } = useContext(firebaseAuth);
    console.log("teste", token);

    return (
    
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/Login" component={ () => token === null ? <Signin /> : <CadastroCategoria />} />
    </Switch>
    );
}

export default App;
