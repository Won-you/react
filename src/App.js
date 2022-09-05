import React from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import page from './page';
import main from './main';


function App() {
  return (
    <Router>
    <div className="App">
      <h2>Hello</h2>

      <switch>
        <Route exact path='/' component={page}/>
        <Route exact path='/main' component={main}/>
      </switch>

    </div>
    </Router>
  );
}

export default App;
