import React from 'react';
import ReactDOM from 'react-dom';
import './../css/style.scss';

document.addEventListener('DOMContentLoaded', function(){

    class SideBar extends React.Component {
        render() {
            return (
                <div className="col-sm-3">
                    <h3>Admin dashboard</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Dashboard</li>
                        <li className="list-group-item">Email</li>
                        <li className="list-group-item">Calendar</li>
                        <li className="list-group-item">Charts</li>
                        <li className="list-group-item">Forms</li>
                        <li className="list-group-item">Tables</li>
                        <li className="list-group-item">Maps</li>
                    </ul>
                </div>
            )
        }
    }

    class Main extends React.Component {
        render() {
            return (
                <div className="col-sm-9">
                    <div className="container">
                        <div className="row">
                            <h3 className="text">TEST</h3>
                        </div>
                        <div className="row bordero">
                            <div className="container mainbox">
                                asdasd
                            </div>
                        </div>
                    </div>  
                </div> 
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <div className="container">
                    <div className="row">
                        <SideBar/>
                        <Main/>
                    </div>
                </div>
                )
        }


    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});