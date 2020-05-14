import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './index.css';

import App from "./components/App/App";
import LearnMore from './pages/LearnMore/LearnMore'
import Register from "./components/Register/Register";
import ReportAccidentForm from './components/ReportAccidentForm/ReportAccidentForm';


const routing = (
    <Router>
        <header>
            <nav className="text-white">
                <div className="brand">
                    <i className="fas fa-car-crash fa-3x"></i>
                </div>
                <ul className="links">
                    <li>
                        <Link to="/" className="link">Save Life</Link>
                    </li>
                    <li>
                        <Link to="rescue-units" className="link">Rescue Units</Link>
                    </li>
                    <li>
                        <Link to="learn-more" className="link">Learn More</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/rescue-units" component={Register} /> {/* Replace this with the login component */}
                <Route path="/learn-more" component={LearnMore} />
                <Route path="/report-accident" component = {ReportAccidentForm} /> 
                <Route path="/report-recklessness" component = {LearnMore}/> {/* replace this with the report-recklessness form */}
                <Route path="/login" component = {Register}/> {/* Replace this with the login component */}
                <Route path="/register" component={Register}/>
            </Switch>

        </header>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
    

serviceWorker.unregister();
