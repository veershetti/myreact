import React from 'react';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Switch, Route } from "react-router-dom";
import Distributor from './components/Distributor';
function App() {
  return (
    <>
    
    <div className="container" className="text-success text-center" > 
        <div className="danger">
        <h1>SHAHEED HOSPITAL</h1>
        </div>
    </div>
    <div className="container" className="text-danger text-center" > 
        <div >
        <h2>DALLI RAJHARA</h2>
        </div>
    </div>
    <Navbar/>
    <Switch>
      <Route exact path="/Inventory">
        <Inventory />
      </Route>
      <Route exact path="/Distributor">
        <Distributor />
      </Route>

      
    </Switch>

    </>
  );
}

export default App;
