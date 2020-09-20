import React from 'react';
import './App.css';
import Home from './routes/Home';
import Registry from './routes/Registry';
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/registry">
            <Registry/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
