import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom"



import Dashboard from "../dashboard/dashboard"
import FlightControl from "../flight_control/flight_control"
import Settings from "../settings/settings"
import Imprint from "../imprint/imprint"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <div>
              <ul>

                  <li>
                      <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                      <Link to="/flug_kontrolle">Flug Kontrolle</Link>
                  </li>
                  <li>
                      <Link to="/einstellungen">Einstellungen</Link>
                  </li>
                  <li>
                      <Link to="/impressum">Impressum</Link>
                  </li>
              </ul>

              <hr/>

              <Route  exact path="/" component={Dashboard}/>
              <Route  path="/dashboard" component={Dashboard}/>
              <Route  path="/flug_kontrolle" component={FlightControl}/>
              <Route  path="/einstellungen" component={Settings}/>
              <Route  path="/impressum" component={Imprint}/>

          </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
