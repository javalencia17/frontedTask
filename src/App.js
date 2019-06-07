import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import NewTask from './pages/NewTask'

function App() {
  return (
    <div>
       <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/NewTask">Nuevo</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Inicio} />
        <Route path="/NewTask" component={NewTask} />
        <Route path="/topics" component={Inicio} />
      </div>
    </Router>
        
    </div>
  );
}

export default App;
