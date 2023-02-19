import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import './App.css';
import Homepage from './components/page/Homepage';
import Navbar from './components/navbar/Navbar';
import MyProduct from './components/page/MyProduct';
import Subapp from './components/subapp/Subapp';


function App() {
  return (
    <div className=''>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/myproduct">
            <MyProduct />
          </Route>
          <Route path="/subapp">
            <Subapp />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
