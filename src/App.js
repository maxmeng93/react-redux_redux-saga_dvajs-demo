import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import DvajsPage from './pages/DvajsPage/';
import ReactReduxPage from './pages/ReactReduxPage/';
import ReduxPage from './pages/ReduxPage/';
import ReduxSagaPage from './pages/ReduxSagaPage/';
import BasicPage from './pages/BasicPage/';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/redux">redux demo</Link></li>
          <li><Link to="/react-redux">react-redux demo</Link></li>
          <li><Link to="/redux-saga">redux-saga demo</Link></li>
          <li><Link to="/dvajs">dvajs demo</Link></li>
        </ul>
        
        <Route path="/redux" component={ReduxPage}></Route>
        <Route path="/react-redux" component={ReactReduxPage}></Route>
        <Route path="/redux-saga" component={ReduxSagaPage}></Route>
        <Route path="/dvajs" component={DvajsPage}></Route>
        <Route path="/" exact component={BasicPage}></Route>
      </Router>
    </div>
  );
}

export default App;
