import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Sobre from './sobre';
import Livros from './livros';
import Autores from './autores';
import NotFound from './notFound';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={App} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/livros' component={Livros} />
      <Route path='/autores' component={Autores} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
