import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    // Router escuta as alterações do history dentro das rotas
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
