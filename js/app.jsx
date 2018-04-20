import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

// import react-router
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

// import components
import Email from './Email.jsx';
import DateCalendar from './DateCalendar.jsx';
import Forms from './Forms.jsx';
import Tables from './Tables.jsx';
import Maps from './Maps.jsx';
import Dashboard from './Dashboard.jsx';
import Charts from './Charts.jsx';

document.addEventListener('DOMContentLoaded', function(){

    class SideBar extends React.Component {
        render() {
            return (
                <div className="col-sm-3">
                    <h3>Admin dashboard</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/">Dashboard</Link></li>
                        <li className="list-group-item"><Link to="/email">Email</Link></li>
                        <li className="list-group-item"><Link to="/calendar">Calendar</Link></li>
                        <li className="list-group-item"><Link to="/charts">Charts</Link></li>
                        <li className="list-group-item"><Link to="/forms">Forms</Link></li>
                        <li className="list-group-item"><Link to="/tables">Tables</Link></li>
                        <li className="list-group-item"><Link to="/maps">Maps</Link></li>
                    </ul>
                </div>
            )
        }
    }

    class Template extends React.Component {
        render() {
            return (
                <div className="container">
                    <div className="row">
                        <SideBar/>
                        { this.props.children }
                    </div>
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Dashboard} />
                        <Route path='/email' component={Email} />
                        <Route path='/calendar' component={DateCalendar} />
                        <Route path='/charts' component={Charts} />
                        <Route path='/forms' component={Forms} />
                        <Route path='/tables' component={Tables} />
                        <Route path='/maps' component={Maps} />
                    </Route>
                </Router>
                )
        }


    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});