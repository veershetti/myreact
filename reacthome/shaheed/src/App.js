import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
    <><div className="container text-center">
<div  class="text-success">
<h1><i>SHAHEED HOSPITAL</i></h1>
</div>
<div  class="text-danger">
      <h2>Dalli Rajhara</h2>  
</div>

    </div>
<Navbar/>

<BrowserRouter>
         <Switch>
           <Route path='/Inventory' component={Inventory} />
         </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
